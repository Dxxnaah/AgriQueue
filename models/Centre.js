const mongoose = require('mongoose');

const centreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    location: { type: String, default: '' },
    activeCounters: { type: Number, default: 5 },
    mspRates: {
      paddy: { type: Number, default: 20.4 },
      wheat: { type: Number, default: 22.75 },
      rice: { type: Number, default: 30.0 }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Centre', centreSchema);
