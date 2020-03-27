const express = require('express');
const router = express.Router();
const orderService = require('../services/OrderService');
const verifyUser = require('../services/VerifyService');

router.get('/', async (req, res) => {
  await orderService.getAllOrders(req, res);
});

router.post('/create', verifyUser, async (req, res) => {
  await orderService.createOrder(req, res);
});

module.exports = router;
