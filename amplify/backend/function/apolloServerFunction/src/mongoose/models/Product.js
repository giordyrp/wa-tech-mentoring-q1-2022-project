const mongoose = require('mongoose');
const Image = require('../schemas/Image');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  images: {
    type: [Image],
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true,
  },
});

module.exports = mongoose.model('Product', ProductSchema);