const QueueToken = require('../models/QueueToken');
const Centre = require('../models/Centre');
const { broadcast } = require('../utils/socket');

// POST /api/procurement/:token/quality
// Body: { moisture, impurities, foreignMatter, status, remarks }
async function saveQuality(req, res) {
  const { moisture, impurities, foreignMatter, status, remarks } = req.body;
  if (moisture == null || impurities == null || foreignMatter == null || !status) {
    return res.status(400).json({ error: 'moisture, impurities, foreignMatter and status are required' });
  }

  const doc = await QueueToken.findOneAndUpdate(
    { token: req.params.token },
    {
      quality: { moisture, impurities, foreignMatter, status, remarks, checkedAt: new Date() }
    },
    { new: true }
  );
  if (!doc) return res.status(404).json({ error: 'Token not found' });

  broadcast('queue:update', { reason: 'quality', token: doc.token });
  res.json(doc);
}

// POST /api/procurement/:token/weight
// Body: { grossWeight, tareWeight, moistureDeduction }
async function saveWeight(req, res) {
  const { grossWeight, tareWeight, moistureDeduction = 0 } = req.body;
  if (grossWeight == null || tareWeight == null) {
    return res.status(400).json({ error: 'grossWeight and tareWeight are required' });
  }

  const netWeight = Number(grossWeight) - Number(tareWeight);
  const finalWeight = netWeight - (netWeight * Number(moistureDeduction)) / 100;

  const doc = await QueueToken.findOneAndUpdate(
    { token: req.params.token },
    {
      weight: {
        grossWeight, tareWeight, netWeight,
        moistureDeduction, finalWeight,
        measuredAt: new Date()
      }
    },
    { new: true }
  );
  if (!doc) return res.status(404).json({ error: 'Token not found' });

  broadcast('queue:update', { reason: 'weight', token: doc.token });
  res.json(doc);
}

// POST /api/procurement/:token/payment
// Body: { method, reference }
// Amount is computed server-side from final weight * centre MSP rate — never trust a client-sent amount.
async function processPayment(req, res) {
  const { method, reference } = req.body;
  if (!method) return res.status(400).json({ error: 'method is required' });

  const doc = await QueueToken.findOne({ token: req.params.token }).populate('centre');
  if (!doc) return res.status(404).json({ error: 'Token not found' });
  if (!doc.weight || doc.weight.finalWeight == null) {
    return res.status(400).json({ error: 'Weight measurement must be completed before payment' });
  }

  const cropKey = String(doc.cropType).toLowerCase();
  const mspRate = (doc.centre.mspRates && doc.centre.mspRates[cropKey]) || 0;
  const amount = Math.round(doc.weight.finalWeight * mspRate * 100) / 100;

  doc.payment = {
    amount,
    mspRate,
    method,
    reference,
    status: 'paid',
    paidAt: new Date()
  };
  await doc.save();

  broadcast('queue:update', { reason: 'payment', token: doc.token });
  res.json(doc);
}

module.exports = { saveQuality, saveWeight, processPayment };
