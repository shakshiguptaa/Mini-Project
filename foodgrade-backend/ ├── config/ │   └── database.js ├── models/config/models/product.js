const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  barcode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  lotCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
