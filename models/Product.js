const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  availability: Boolean,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
