const Product = require('../models/Product');

// GET ALL
const GetAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
};

// CREATE
const CreateProduct = async (req, res) => {
  const productExists = await Product.findOne({ name: req.body.name });
  if (productExists === true) {
    return res
      .status(400)
      .send({ message: 'This product does already exist in our database.' });
  }

  const newProduct = await new Product({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description
  });

  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.GetAllProducts = GetAllProducts;
exports.CreateProduct = CreateProduct;
