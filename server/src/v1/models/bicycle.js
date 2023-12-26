const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const bicycleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    wheel_size: {
      type: Number,
    },
    price: {
      type: Number,
    },
    status: {
      type: String,
      default: 'Available',
    },
  },
  schemaOptions,
);

module.exports = mongoose.model('Bicycle', bicycleSchema);
