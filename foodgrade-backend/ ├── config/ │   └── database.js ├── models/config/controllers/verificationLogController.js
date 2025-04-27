const VerificationLog = require('../models/verificationLog');

// Create a new verification log
exports.createVerificationLog = async (req, res) => {
  try {
    const { barcode, status } = req.body;
    const log = await VerificationLog.create({ barcode, status });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ message: 'Error creating verification log', error: err.message });
  }
};

// Get all verification logs
exports.getAllVerificationLogs = async (req, res) => {
  try {
    const logs = await VerificationLog.findAll();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving verification logs', error: err.message });
  }
};
