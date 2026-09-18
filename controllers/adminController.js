const QueueToken = require('../models/QueueToken');
const Centre = require('../models/Centre');

const AVG_PROCESS_MIN = Number(process.env.AVG_PROCESS_MIN || 9);

// GET /api/admin/stats?centreId=&date=
async function getStats(req, res) {
  const { centreId, date } = req.query;
  if (!centreId) return res.status(400).json({ error: 'centreId is required' });
  const today = date || new Date().toISOString().slice(0, 10);

  const centre = await Centre.findById(centreId);
  if (!centre) return res.status(404).json({ error: 'Centre not found' });

  const filter = { centre: centreId, date: today };

  const [totalTokens, onlineTokens, kioskTokens, waiting, completed, noShow, cropAgg] = await Promise.all([
    QueueToken.countDocuments(filter),
    QueueToken.countDocuments({ ...filter, type: 'online' }),
    QueueToken.countDocuments({ ...filter, type: 'kiosk' }),
    QueueToken.countDocuments({ ...filter, status: 'waiting' }),
    QueueToken.countDocuments({ ...filter, status: 'completed' }),
    QueueToken.countDocuments({ ...filter, status: 'no_show' }),
    QueueToken.aggregate([
      { $match: filter },
      { $group: { _id: '$cropType', count: { $sum: 1 } } }
    ])
  ]);

  const noShowRate = totalTokens > 0 ? Math.round((noShow / totalTokens) * 100) : 0;
  const avgWaitTime = Math.ceil((waiting * AVG_PROCESS_MIN) / (centre.activeCounters || 5));

  res.json({
    date: today,
    totalTokens,
    onlineTokens,
    kioskTokens,
    waiting,
    completed,
    noShow,
    noShowRate,
    avgWaitTime,
    cropDistribution: cropAgg.map((c) => ({ crop: c._id, count: c.count }))
  });
}

// GET /api/admin/payments?centreId=&date=
async function getPayments(req, res) {
  const { centreId, date } = req.query;
  if (!centreId) return res.status(400).json({ error: 'centreId is required' });
  const filter = { centre: centreId, 'payment.status': { $exists: true } };
  if (date) filter.date = date;

  const items = await QueueToken.find(filter)
    .select('token farmerName cropType weight.finalWeight payment date')
    .sort({ updatedAt: -1 });

  res.json(items);
}

module.exports = { getStats, getPayments };
