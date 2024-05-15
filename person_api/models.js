const mongoose = require('mongoose');
const { personSchema } = require('./schemas');

const personModel = mongoose.model('person', personSchema);

module.exports = {personModel };