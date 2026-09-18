const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { getDisplayData } = wrapAll(require('../controllers/displayController'));

router.get('/', getDisplayData);

module.exports = router;
