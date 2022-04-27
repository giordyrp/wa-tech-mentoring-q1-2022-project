const mongoose = require('mongoose');

const ImageDimension = new mongoose.Schema({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});

const Image = new mongoose.Schema({
  url: { type: String, required: true },
  alt: String,
  dimension: { type: ImageDimension, required: true },
});

module.exports = Image;
