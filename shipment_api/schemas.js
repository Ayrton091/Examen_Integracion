const mongoose = require('mongoose');
const shipmentSchema = new mongoose.Schema({

    id: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = {shipmentSchema}