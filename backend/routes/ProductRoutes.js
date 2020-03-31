const express = require('express');
const router = express.Router();
const productService = require('../services/ProductService');
const verifyToken = require('../services/VerifyService');

router.get('/', async (req, res) => {
  await productService.getProducts(req, res);
});

router.get('/:id', verifyToken, async (req, res) => {
  await productService.getProductById(req, res);
});

router.get('/delete/:id', verifyToken, async (req, res) => {
  await productService.deleteProduct(req, res);
});

router.post('/create', verifyToken, async (req, res) => {
  await productService.createProduct(req, res);
});

module.exports = router;
