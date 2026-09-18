const QueueToken = require('../models/QueueToken');
const Counter = require('../models/Counter');
const { broadcast } = require('../utils/socket');

// GET /api/counters?centreId=
async function listCounters(req, res) {
  const { centreId } = req.query;
  if (!centreId) return res.status(400).json({ error: 'centreId is required' });

  const counters = await Counter.find({ centre: centreId })
    .sort({ number: 1 })
    .populate('currentToken');
  res.json(counters);
}

async function getOrCreateCounter(centreId, number) {
  let counter = await Counter.findOne({ centre: centreId, number });
  if (!counter) counter = await Counter.create({ centre: centreId, number });
  return counter;
}

// POST /api/counters/:number/call-next   Body: { centreId }
async function callNext(req, res) {
  const number = Number(req.params.number);
  const { centreId } = req.body;
  if (!centreId) return res.status(400).json({ error: 'centreId is required' });

  const counter = await getOrCreateCounter(centreId, number);

  // Complete whatever this counter is currently serving.
  if (counter.serving && counter.currentToken) {
    await QueueToken.findByIdAndUpdate(counter.currentToken, {
      status: 'completed',
      counter: null,
      completedAt: new Date()
    });
  }

  // Pull the next waiting token (FIFO) for this centre.
  const next = await QueueToken.findOneAndUpdate(
    { centre: centreId, status: 'waiting' },
    { status: 'serving', counter: number, calledAt: new Date() },
    { sort: { createdAt: 1 }, new: true }
  );

  if (next) {
    counter.serving = true;
    counter.currentToken = next._id;
  } else {
    counter.serving = false;
    counter.currentToken = null;
  }
  await counter.save();

  broadcast('queue:update', { reason: 'call-next', counter: number, token: next ? next.token : null });
  broadcast('display:announce', { token: next ? next.token : null, counter: number });

  res.json({ counter: counter.number, serving: counter.serving, token: next });
}

// POST /api/counters/:number/complete   Body: { centreId }
async function completeCurrent(req, res) {
  const number = Number(req.params.number);
  const { centreId } = req.body;
  if (!centreId) return res.status(400).json({ error: 'centreId is required' });

  const counter = await getOrCreateCounter(centreId, number);
  if (!counter.serving || !counter.currentToken) {
    return res.status(400).json({ error: 'This counter is not currently serving a token' });
  }

  const completed = await QueueToken.findByIdAndUpdate(
    counter.currentToken,
    { status: 'completed', counter: null, completedAt: new Date() },
    { new: true }
  );

  counter.serving = false;
  counter.currentToken = null;
  await counter.save();

  broadcast('queue:update', { reason: 'complete', counter: number, token: completed ? completed.token : null });

  res.json({ ok: true, token: completed });
}

// POST /api/counters/:number/recall   Body: { centreId }
async function recall(req, res) {
  const number = Number(req.params.number);
  const { centreId } = req.body;
  if (!centreId) return res.status(400).json({ error: 'centreId is required' });

  const counter = await getOrCreateCounter(centreId, number).then((c) => c.populate('currentToken'));
  if (!counter.serving || !counter.currentToken) {
    return res.status(400).json({ error: 'This counter is not currently serving a token' });
  }

  broadcast('display:announce', { token: counter.currentToken.token, counter: number, recalled: true });
  res.json({ ok: true, token: counter.currentToken.token });
}

module.exports = { listCounters, callNext, completeCurrent, recall };
