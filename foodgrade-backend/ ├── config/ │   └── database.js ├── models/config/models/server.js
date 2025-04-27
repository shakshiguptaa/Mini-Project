const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./models/product');
const VerificationLog = require('./models/verificationLog');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

// Route to verify a product's date
app.post('/verify', async (req, res) => {
  const { barcode, lotCode, expirationDate } = req.body;

  try {
    const product = await Product.findOne({
      where: { barcode, lotCode },
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const valid = new Date(expirationDate) <= new Date(product.expirationDate);

    const status = valid ? 'Valid' : 'Invalid';
    await VerificationLog.create({
      barcode,
      status,
    });

    res.json({ status, message: valid ? 'Product is safe to consume' : 'Expired or invalid product' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Sync database and start the server
sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
});
