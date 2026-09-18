const express = require('express');
const router = express.Router();
const Centre = require('../models/Centre');

router.get('/', async (req, res) => {
  const centres = await Centre.find().select('name location activeCounters');
  res.json(centres);
});

module.exports = router;
