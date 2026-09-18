const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['staff', 'admin'], default: 'staff' },
    centre: { type: mongoose.Schema.Types.ObjectId, ref: 'Centre' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Staff', staffSchema);
