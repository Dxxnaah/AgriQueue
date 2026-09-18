const QueueToken = require('../models/QueueToken');

/**
 * Generates the next sequential token string for a centre/date, e.g. "O-021" or "K-022".
 * Numbering is shared across online + kiosk for a given centre/date so the physical
 * sequence in the queue stays continuous (matches the O-K-O-K fairness model on the frontend).
 */
async function generateNextToken(centreId, date, type) {
  const count = await QueueToken.countDocuments({ centre: centreId, date });
  const nextNumber = count + 1;
  const prefix = type === 'kiosk' ? 'K' : 'O';
  return `${prefix}-${String(nextNumber).padStart(3, '0')}`;
}

module.exports = { generateNextToken };
