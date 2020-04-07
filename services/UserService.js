const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res
      .status(400)
      .send({ Message: 'Sorry, we could not find the requested user.' });
  }
};

const createUser = async (req, res) => {
  const userExists = await User.findOne({ username: req.body.username });
  if (userExists) {
    return res.status(400).send({
      message:
        'The username already exists in our database. Registration failed.',
    });
  }

  const hashedPass = await bcrypt.hash(req.body.password, 10);

  const newUser = await new User({
    username: req.body.username,
    password: hashedPass,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.json({
      message: 'Please fill out the entire form. Registration failed.',
    });
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user)
    return res
      .status(400)
      .send({ message: 'The username does not exist in our database.' });

  const isPassValid = await bcrypt.compare(req.body.password, user.password);

  if (!isPassValid) {
    return res.status(400).send({ message: 'The password is incorrect. ' });
  }

  const token = jwt.sign(
    { user },
    '1axQDl5fcMTTts4Ed7bVGkKqJEcNhkLBsptX7lcfRjeiS8XnJ0sRiRLoxfdt2jtus3CuYkxiwWCX6JIeJ3CEjDLA8MVXNNMDeiK1DILbZjnP0LKs7O4VUQAzJt3145ST'
  );

  try {
    res.header('token', token).send({ token: token });
  } catch (err) {
    res.send({ message: err });
  }
};

exports.getUser = getUser;
exports.createUser = createUser;
exports.loginUser = loginUser;
