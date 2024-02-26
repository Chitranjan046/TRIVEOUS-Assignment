const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');



router.get('/get-product/:id', productController.getProduct);
router.delete('/delete-product/:id', productController.deleteProduct);
router.put('/update-product/:id', productController.updateProduct);
router.post('/product', productController.create);
router.get('/:categoryId', productController.getProductsByCategory);
router.get('/:productId', productController.getProductById);

module.exports = router;
