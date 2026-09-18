const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { getSlotInfo, joinQueue, getStatus, leaveQueue, listQueue } = wrapAll(require('../controllers/queueController'));
const { requireAuth } = require('../middleware/auth');

router.get('/slot-info', getSlotInfo);
router.post('/join', joinQueue);
router.get('/status/:token', getStatus);
router.delete('/:token', leaveQueue);
router.get('/', requireAuth, listQueue);

module.exports = router;
