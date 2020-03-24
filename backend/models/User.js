const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
  },
  username: {
    type: String,
    required: true,
    min: 4
  },
  password: {
    type: String,
    required: true,
    min: 4
  }
});

module.exports = mongoose.model('User', userSchema);
