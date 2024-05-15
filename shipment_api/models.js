const mongoose = require('mongoose');
const { shipmentSchema } = require('./schemas');

const shipmentModel = mongoose.model('shipment', shipmentSchema);

module.exports = {shipmentModel };