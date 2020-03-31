const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');
const verifyToken = require('../services/VerifyService');

router.get('/', async (req, res) => {
  await userService.getAllUsers(req, res);
});

router.post('/register', async (req, res) => {
  await userService.createUser(req, res);
});

router.post('/login', async (req, res) => {
  await userService.loginUser(req, res);
});

module.exports = router;
