const express = require('express');
const router = express.Router();
const OrderService = require('../services/OrderService');

router.get('/', async (req, res) => {
  await OrderService.GetAllOrders(req, res);
});

router.post('/create', async (req, res) => {
  await OrderService.CreateOrder(req, res);
});

module.exports = router;
