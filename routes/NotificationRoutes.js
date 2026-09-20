const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { sendNotification, getLog } = wrapAll(require('../controllers/NotificationController'));

router.post('/send', sendNotification);
router.get('/log', getLog);

module.exports = router;