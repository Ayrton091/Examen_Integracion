const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

  module.exports = {orderSchema}