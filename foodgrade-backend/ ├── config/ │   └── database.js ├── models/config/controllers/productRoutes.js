const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:barcode', productController.getProduct);
router.put('/:barcode', productController.updateProduct);
router.delete('/:barcode', productController.deleteProduct);

module.exports = router;
