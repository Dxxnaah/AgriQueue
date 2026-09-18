const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { saveQuality, saveWeight, processPayment } = wrapAll(require('../controllers/procurementController'));
const { requireAuth } = require('../middleware/auth');

router.use(requireAuth);

router.post('/:token/quality', saveQuality);
router.post('/:token/weight', saveWeight);
router.post('/:token/payment', processPayment);

module.exports = router;
