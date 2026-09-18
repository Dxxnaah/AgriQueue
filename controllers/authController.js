const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Staff = require('../models/Staff');

function signToken(staff) {
  return jwt.sign(
    { id: staff._id, username: staff.username, role: staff.role, centre: staff.centre },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
  );
}

// POST /api/auth/login
async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'username and password are required' });
  }

  const staff = await Staff.findOne({ username });
  if (!staff) return res.status(401).json({ error: 'Invalid username or password' });

  const ok = await bcrypt.compare(password, staff.passwordHash);
  if (!ok) return res.status(401).json({ error: 'Invalid username or password' });

  const token = signToken(staff);
  res.json({
    token,
    staff: { id: staff._id, username: staff.username, role: staff.role, centre: staff.centre }
  });
}

// POST /api/auth/register  (admin-only in practice; open here for demo/seeding convenience)
async function register(req, res) {
  const { username, password, role, centre } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'username and password are required' });
  }
  const exists = await Staff.findOne({ username });
  if (exists) return res.status(409).json({ error: 'Username already taken' });

  const passwordHash = await bcrypt.hash(password, 10);
  const staff = await Staff.create({ username, passwordHash, role: role || 'staff', centre });
  res.status(201).json({ id: staff._id, username: staff.username, role: staff.role });
}

module.exports = { login, register };
