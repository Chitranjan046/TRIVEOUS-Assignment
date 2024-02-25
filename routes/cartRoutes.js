const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add', cartController.addToCart);
router.get('/view', cartController.viewCart);
router.put('/update', cartController.updateCart);
router.delete('/remove', cartController.removeFromCart);

module.exports = router;
