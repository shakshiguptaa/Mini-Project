const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { barcode, lotCode, expirationDate, manufacturer } = req.body;
    const product = await Product.create({ barcode, lotCode, expirationDate, manufacturer });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving products', error: err.message });
  }
};

// Get a single product by barcode
exports.getProduct = async (req, res) => {
  try {
    const { barcode } = req.params;
    const product = await Product.findOne({ where: { barcode } });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving product', error: err.message });
  }
};

// Update product details
exports.updateProduct = async (req, res) => {
  try {
    const { barcode } = req.params;
    const { lotCode, expirationDate, manufacturer } = req.body;
    const product = await Product.findOne({ where: { barcode } });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.lotCode = lotCode;
    product.expirationDate = expirationDate;
    product.manufacturer = manufacturer;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { barcode } = req.params;
    const product = await Product.findOne({ where: { barcode } });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err.message });
  }
};
