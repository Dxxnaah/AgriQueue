const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/agriqueue';
  try {
    await mongoose.connect(uri);
    console.log(`[db] Connected to MongoDB: ${uri}`);
  } catch (err) {
    console.error('[db] Connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
