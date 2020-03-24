const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4
  },
  password: {
    type: String,
    required: true,
    min: 4
  },
  firstName: {
    type: String,
    required: true,
    min: 2
  },
  lastName: {
    type: String,
    required: true,
    min: 2
  },
  email: {
    type: String,
    required: true,
    min: 2
  }
});

module.exports = mongoose.model('User', userSchema);
