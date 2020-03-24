const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

router.get('/', async (req, res) => {
  await UserService.GetAllUsers(req, res);
});

router.post('/register', async (req, res) => {
  await UserService.CreateUser(req, res);
});

router.post('/login', async (req, res) => {
  await UserService.LoginUser(req, res);
});

module.exports = router;
