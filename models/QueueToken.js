const mongoose = require('mongoose');

const qualityCheckSchema = new mongoose.Schema(
  {
    moisture: Number,
    impurities: Number,
    foreignMatter: Number,
    status: { type: String, enum: ['passed', 'conditionally_passed', 'failed'] },
    remarks: String,
    checkedAt: Date
  },
  { _id: false }
);

const weightMeasurementSchema = new mongoose.Schema(
  {
    grossWeight: Number,
    tareWeight: Number,
    netWeight: Number,
    moistureDeduction: Number,
    finalWeight: Number,
    measuredAt: Date
  },
  { _id: false }
);

const paymentSchema = new mongoose.Schema(
  {
    amount: Number,
    mspRate: Number,
    method: { type: String, enum: ['bank_transfer', 'upi', 'cheque'] },
    reference: String,
    status: { type: String, enum: ['pending', 'processing', 'paid'], default: 'pending' },
    paidAt: Date
  },
  { _id: false }
);

const queueTokenSchema = new mongoose.Schema(
  {
    token: { type: String, required: true, unique: true }, // e.g. O-021, K-022
    type: { type: String, enum: ['online', 'kiosk'], required: true },

    farmerName: { type: String, required: true },
    farmerId: { type: String }, // optional pre-existing farmer ID / Aadhaar lookup
    mobile: { type: String },
    aadhaar: { type: String },
    bankAccount: { type: String },

    centre: { type: mongoose.Schema.Types.ObjectId, ref: 'Centre', required: true },
    cropType: { type: String, required: true },
    quantity: { type: Number, required: true }, // estimated quantity in kg

    date: { type: String, required: true }, // YYYY-MM-DD preferred date
    slot: { type: String, enum: ['morning', 'afternoon', 'evening'], required: true },

    status: {
      type: String,
      enum: ['waiting', 'serving', 'completed', 'cancelled', 'no_show'],
      default: 'waiting'
    },
    counter: { type: Number, default: null },

    // Procurement pipeline
    quality: { type: qualityCheckSchema, default: null },
    weight: { type: weightMeasurementSchema, default: null },
    payment: { type: paymentSchema, default: null },

    calledAt: Date,
    servedAt: Date,
    completedAt: Date
  },
  { timestamps: true }
);

queueTokenSchema.index({ centre: 1, date: 1, slot: 1 });
queueTokenSchema.index({ status: 1 });

module.exports = mongoose.model('QueueToken', queueTokenSchema);
