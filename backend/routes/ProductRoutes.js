const express = require('express');
const router = express.Router();
const ProductService = require('../services/ProductService');

router.get('/', async (req, res) => {
  await ProductService.GetAllProducts(req, res);
});

router.post('/create', async (req, res) => {
  await ProductService.CreateProduct(req, res);
});

module.exports = router;
