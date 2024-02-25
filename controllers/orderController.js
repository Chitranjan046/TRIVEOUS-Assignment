const Order = require('../models/Order');
const CartItem = require('../models/Cart');
const Product = require('../models/Product');

exports.placeOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const cartItems = await CartItem.find({ user: userId }).populate('product');
    
    // Calculate total price
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.product.price * item.quantity;
    });

    // Create the order
    const order = new Order({
      user: userId,
      products: cartItems.map(item => item.product),
      totalPrice,
    });
    await order.save();

    // Clear the user's cart
    await CartItem.deleteMany({ user: userId });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await Order.find({ user: userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
