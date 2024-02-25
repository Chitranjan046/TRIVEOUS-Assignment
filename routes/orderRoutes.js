const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/place', orderController.placeOrder);
router.get('/history', orderController.getOrderHistory);
router.get('/:orderId', orderController.getOrderById);

module.exports = router;
