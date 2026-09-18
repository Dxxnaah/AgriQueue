const QueueToken = require('../models/QueueToken');
const Centre = require('../models/Centre');
const { generateNextToken } = require('../utils/generateToken');
const { broadcast } = require('../utils/socket');

const AVG_PROCESS_MIN = Number(process.env.AVG_PROCESS_MIN || 9);

// POST /api/kiosk/token
// Body: { farmerId, centreId, cropType, quantity }
// Kiosk tokens are for same-day walk-ins: date = today, slot = whichever slot the current time falls in.
async function generateKioskToken(req, res) {
  const { farmerId, centreId, cropType, quantity } = req.body;
  if (!farmerId || !centreId || !cropType || !quantity) {
    return res.status(400).json({ error: 'farmerId, centreId, cropType and quantity are required' });
  }

  const centre = await Centre.findById(centreId);
  if (!centre) return res.status(404).json({ error: 'Centre not found' });

  const now = new Date();
  const hour = now.getHours();
  const slot = hour < 12 ? 'morning' : hour < 16 ? 'afternoon' : 'evening';
  const date = now.toISOString().slice(0, 10);

  const tokenStr = await generateNextToken(centreId, date, 'kiosk');

  const doc = await QueueToken.create({
    token: tokenStr,
    type: 'kiosk',
    farmerName: farmerId, // kiosk flow only captures an ID; staff can update name later if needed
    farmerId,
    centre: centreId,
    cropType,
    quantity,
    date,
    slot,
    status: 'waiting'
  });

  const ahead = await QueueToken.countDocuments({
    centre: centreId,
    status: 'waiting',
    createdAt: { $lt: doc.createdAt }
  });
  const estWaitMinutes = Math.ceil((ahead * AVG_PROCESS_MIN) / (centre.activeCounters || 5));

  broadcast('queue:update', { reason: 'kiosk-joined', token: doc.token });

  res.status(201).json({ token: doc.token, queuePosition: ahead + 1, estWaitMinutes });
}

module.exports = { generateKioskToken };
