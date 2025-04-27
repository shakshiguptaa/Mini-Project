const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const VerificationLog = sequelize.define('VerificationLog', {
  barcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = VerificationLog;
