const CartItem = require('../models/Cart');
const Product = require('../models/Product');

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    // Check if the product is already in the cart
    let cartItem = await CartItem.findOne({ product: productId });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = new CartItem({
        product: productId,
        quantity,
      });
      await cartItem.save();
    }
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.viewCart = async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('product');
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCart = async (req, res) => {
  // Implement logic to update cart
};

exports.removeFromCart = async (req, res) => {
  // Implement logic to remove product from cart
};
