const Product = require('../models/Product');

exports.getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const products = await Product.find({ category: categoryId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.create = async (req, res) => {
  try {
    
    const product = await Product.create(req.body);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    console.log("PRODUCTID", productID);
    
    const product = await Product.findByIdAndUpdate(productID, req.body);
    console.log("PRODUCT", product);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




exports.deleteProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    console.log("PRODUCTID", productID);
    
    const product = await Product.findByIdAndDelete(productID);
    console.log("PRODUCT", product);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    console.log("PRODUCTID", productID);
    
    const product = await Product.findById(productID);
    console.log("PRODUCT", product);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


