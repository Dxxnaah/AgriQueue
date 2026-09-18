const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { generateKioskToken } = wrapAll(require('../controllers/kioskController'));

router.post('/token', generateKioskToken);

module.exports = router;
