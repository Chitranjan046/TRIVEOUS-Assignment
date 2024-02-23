const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:categoryId', productController.getProductsByCategory);
router.get('/:productId', productController.getProductById);

module.exports = router;
