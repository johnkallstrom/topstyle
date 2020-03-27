const express = require('express');
const router = express.Router();
const OrderService = require('../services/OrderService');
const VerifyUser = require('../services/VerifyService');

// TODO: Get all orders by user ID

router.get('/', async (req, res) => {
  await OrderService.GetAllOrders(req, res);
});

router.post('/create', VerifyUser, async (req, res) => {
  await OrderService.CreateOrder(req, res);
});

module.exports = router;
