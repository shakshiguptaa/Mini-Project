const express = require('express');
const router = express.Router();
const verificationLogController = require('../controllers/verificationLogController');

router.post('/', verificationLogController.createVerificationLog);
router.get('/', verificationLogController.getAllVerificationLogs);

module.exports = router;
