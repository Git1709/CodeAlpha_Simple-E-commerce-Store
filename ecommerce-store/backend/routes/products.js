const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add a new product
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
