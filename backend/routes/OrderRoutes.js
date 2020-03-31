const express = require('express');
const router = express.Router();
const orderService = require('../services/OrderService');
const verifyToken = require('../services/VerifyService');

router.get('/', async (req, res) => {
  await orderService.getAllOrders(req, res);
});

router.get('/:id', verifyToken, async (req, res) => {
  await orderService.getOrderById(req, res);
});

router.post('/create', verifyToken, async (req, res) => {
  await orderService.createOrder(req, res);
});

module.exports = router;
