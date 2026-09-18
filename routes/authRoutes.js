const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { login, register } = wrapAll(require('../controllers/authController'));

router.post('/login', login);
router.post('/register', register);

module.exports = router;
