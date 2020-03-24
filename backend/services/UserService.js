const User = require('../models/User');

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

const CreateUser = async (req, res) => {
  const userExists = await User.findOne({ username: req.body.username });
  if (userExists === true)
    return res.status(400).send('The user already exists in our database.');

  const newUser = await new User({
    username: req.body.username,
    password: req.body.password,
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

const LoginUser = async (req, res) => {
  const userExists = await User.findOne({ username: req.body.username });
  if (userExists === true) {
    // Check if password matches
  } else {
    return res
      .status(400)
      .send('That username does not exist in our database.');
  }
};

exports.GetAllUsers = GetAllUsers;
exports.CreateUser = CreateUser;
exports.LoginUser = LoginUser;
