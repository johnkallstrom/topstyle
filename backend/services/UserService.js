const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// GET ALL
const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

// CREATE
const CreateUser = async (req, res) => {
  const userExists = await User.findOne({ username: req.body.username });
  if (userExists === true)
    return res
      .status(400)
      .send({ message: 'The username already exists in our database.' });

  const hashedPass = await bcrypt.hash(req.body.password, 10);

  const newUser = await new User({
    username: req.body.username,
    password: hashedPass,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
};

// LOGIN
const LoginUser = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user)
    return res
      .status(400)
      .send({ message: 'The username does not exist in our database.' });

  const isPassValid = await bcrypt.compare(req.body.password, user.password);

  if (!isPassValid) {
    return res.status(400).send({ message: 'The password is incorrect. ' });
  }

  const token = jwt.sign({ user }, process.env.TOKEN_SECRET);

  try {
    res.header('token', token).send({ token: token });
  } catch (err) {
    res.send({ message: err });
  }
};

exports.GetAllUsers = GetAllUsers;
exports.CreateUser = CreateUser;
exports.LoginUser = LoginUser;
