const mongoose = require('mongoose');
const { orderSchema } = require('./schemas');

const orderModel = mongoose.model('order', orderSchema);

module.exports = {orderModel };