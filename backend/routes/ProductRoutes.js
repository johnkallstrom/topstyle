const express = require('express');
const router = express.Router();
const ProductService = require('../services/ProductService');
const VerifyUser = require('../services/VerifyService');

router.get('/', async (req, res) => {
  await ProductService.GetAllProducts(req, res);
});

router.post('/create', VerifyUser, async (req, res) => {
  await ProductService.CreateProduct(req, res);
});

module.exports = router;
