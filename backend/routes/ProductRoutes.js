const express = require('express');
const router = express.Router();
const productService = require('../services/ProductService');
const verifyUser = require('../services/VerifyService');

router.get('/', async (req, res) => {
  await productService.getAllProducts(req, res);
});

router.post('/create', verifyUser, async (req, res) => {
  await productService.createProduct(req, res);
});

module.exports = router;
