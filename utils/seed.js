require('dotenv').config();
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');
const Centre = require('../models/Centre');
const Staff = require('../models/Staff');
const Counter = require('../models/Counter');
const QueueToken = require('../models/QueueToken');

async function seed() {
  await connectDB();

  console.log('[seed] Clearing existing demo data...');
  await Promise.all([
    Centre.deleteMany({}),
    Staff.deleteMany({}),
    Counter.deleteMany({}),
    QueueToken.deleteMany({})
  ]);

  const centre = await Centre.create({
    name: 'Tamil Nadu Procurement Centre',
    location: 'Coimbatore, Tamil Nadu',
    activeCounters: 5,
    mspRates: { paddy: 20.4, wheat: 22.75, rice: 30.0 }
  });
  console.log(`[seed] Created centre: ${centre.name} (${centre._id})`);

  const passwordHash = await bcrypt.hash('password123', 10);
  await Staff.create({ username: 'staff', passwordHash, role: 'staff', centre: centre._id });
  await Staff.create({ username: 'admin', passwordHash, role: 'admin', centre: centre._id });
  console.log('[seed] Created staff login: staff / password123');
  console.log('[seed] Created admin login: admin / password123');

  for (let i = 1; i <= 5; i++) {
    await Counter.create({ centre: centre._id, number: i });
  }
  console.log('[seed] Created 5 counters');

  const today = new Date().toISOString().slice(0, 10);
  const demoFarmers = [
    { name: 'Rajesh Kumar', type: 'online', crop: 'Paddy', qty: 2500, status: 'serving', counter: 1 },
    { name: 'Suresh Yadav', type: 'kiosk', crop: 'Wheat', qty: 1800, status: 'serving', counter: 2 },
    { name: 'Anita Devi', type: 'online', crop: 'Paddy', qty: 3200, status: 'serving', counter: 3 },
    { name: 'Mohan Singh', type: 'kiosk', crop: 'Rice', qty: 1500, status: 'waiting', counter: null },
    { name: 'Priya Sharma', type: 'online', crop: 'Paddy', qty: 2100, status: 'waiting', counter: null },
    { name: 'Ramesh Patel', type: 'kiosk', crop: 'Wheat', qty: 2800, status: 'waiting', counter: null },
    { name: 'Sunita Devi', type: 'online', crop: 'Paddy', qty: 1900, status: 'waiting', counter: null },
    { name: 'Vijay Kumar', type: 'kiosk', crop: 'Rice', qty: 2400, status: 'waiting', counter: null },
    { name: 'Meena Kumari', type: 'online', crop: 'Paddy', qty: 1700, status: 'waiting', counter: null },
    { name: 'Ajay Singh', type: 'kiosk', crop: 'Wheat', qty: 2200, status: 'waiting', counter: null },
    { name: 'Kavita Sharma', type: 'online', crop: 'Paddy', qty: 2600, status: 'waiting', counter: null },
    { name: 'Ravi Verma', type: 'kiosk', crop: 'Rice', qty: 1400, status: 'waiting', counter: null }
  ];

  let n = 1;
  for (const f of demoFarmers) {
    const prefix = f.type === 'kiosk' ? 'K' : 'O';
    const token = await QueueToken.create({
      token: `${prefix}-${String(20 + n).padStart(3, '0')}`,
      type: f.type,
      farmerName: f.name,
      mobile: '9000000000',
      centre: centre._id,
      cropType: f.crop,
      quantity: f.qty,
      date: today,
      slot: 'morning',
      status: f.status,
      counter: f.counter,
      calledAt: f.status === 'serving' ? new Date() : undefined,
      servedAt: f.status === 'serving' ? new Date() : undefined
    });

    if (f.status === 'serving' && f.counter) {
      await Counter.findOneAndUpdate(
        { centre: centre._id, number: f.counter },
        { serving: true, currentToken: token._id }
      );
    }
    n++;
  }
  console.log(`[seed] Created ${demoFarmers.length} demo queue tokens`);

  console.log('\n[seed] Done. Centre ID for frontend config:');
  console.log(`  ${centre._id}`);
  process.exit(0);
}

seed().catch((err) => {
  console.error('[seed] Failed:', err);
  process.exit(1);
});
