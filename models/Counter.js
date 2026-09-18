const mongoose = require('mongoose');

// One document per physical counter at a centre.
const counterSchema = new mongoose.Schema(
  {
    centre: { type: mongoose.Schema.Types.ObjectId, ref: 'Centre', required: true },
    number: { type: Number, required: true }, // 1, 2, 3...
    serving: { type: Boolean, default: false },
    currentToken: { type: mongoose.Schema.Types.ObjectId, ref: 'QueueToken', default: null }
  },
  { timestamps: true }
);

counterSchema.index({ centre: 1, number: 1 }, { unique: true });

module.exports = mongoose.model('Counter', counterSchema);
