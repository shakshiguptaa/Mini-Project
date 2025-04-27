const { Sequelize } = require('sequelize');

// Set up database connection
const sequelize = new Sequelize('foodgrade_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
