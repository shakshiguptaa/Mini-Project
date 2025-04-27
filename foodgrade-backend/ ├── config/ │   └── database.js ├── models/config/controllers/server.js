const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const verificationLogRoutes = require('./routes/verificationLogRoutes');

const app = express();
app.use(bodyParser.json());

// Use product routes
app.use('/products', productRoutes);

// Use verification log routes
app.use('/logs', verificationLogRoutes);

// Sync database and start the server
sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
});
