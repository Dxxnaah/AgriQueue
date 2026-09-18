const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { sendOtp, verifyOtp, getStatus } = wrapAll(require('../controllers/aadhaarController'));

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.get('/status/:aadhaar', getStatus);

module.exports = router;