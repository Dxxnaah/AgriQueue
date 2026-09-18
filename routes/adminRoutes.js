const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { getStats, getPayments } = wrapAll(require('../controllers/adminController'));
const { requireAuth, requireRole } = require('../middleware/auth');

router.use(requireAuth, requireRole('admin', 'staff'));

router.get('/stats', getStats);
router.get('/payments', getPayments);

module.exports = router;
