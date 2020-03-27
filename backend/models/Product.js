const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 25
  },
  category: {
    type: String,
    required: true,
    min: 2,
    max: 25
  },
  description: {
    type: String,
    required: true,
    min: 2,
    max: 250
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Product', productSchema);
