const QueueToken = require('../models/QueueToken');
const Counter = require('../models/Counter');

// GET /api/display?centreId=
async function getDisplayData(req, res) {
  const { centreId } = req.query;
  if (!centreId) return res.status(400).json({ error: 'centreId is required' });

  const counters = await Counter.find({ centre: centreId }).sort({ number: 1 }).populate('currentToken');
  const upcoming = await QueueToken.find({ centre: centreId, status: 'waiting' })
    .sort({ createdAt: 1 })
    .limit(10);

  res.json({
    counters: counters.map((c) => ({
      number: c.number,
      serving: c.serving,
      token: c.currentToken ? c.currentToken.token : null
    })),
    upcoming: upcoming.map((t) => ({ token: t.token, farmer: t.farmerName, crop: t.cropType }))
  });
}

module.exports = { getDisplayData };
