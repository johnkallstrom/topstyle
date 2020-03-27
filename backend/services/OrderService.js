const Order = require('../models/Order');

// GET ALL
const GetAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
};

// CREATE
const CreateOrder = async (req, res) => {
  const newOrder = await new Order({
    customer: req.body.customer,
    products: req.body.products,
    total: req.body.total
  });

  try {
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.GetAllOrders = GetAllOrders;
exports.CreateOrder = CreateOrder;
