const express = require('express');
const router = express.Router();
const { wrapAll } = require('../middleware/errorHandler');
const { listCounters, callNext, completeCurrent, recall } = wrapAll(require('../controllers/counterController'));
const { requireAuth } = require('../middleware/auth');

router.use(requireAuth);

router.get('/', listCounters);
router.post('/:number/call-next', callNext);
router.post('/:number/complete', completeCurrent);
router.post('/:number/recall', recall);

module.exports = router;
