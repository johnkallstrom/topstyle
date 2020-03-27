const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  customer: {
    type: String,
    required: true
  },
  products: [
    {
      type: Object,
      required: true
    }
  ],
  total: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Order', orderSchema);
