const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  isRecommended: {
    type: Number,
    enum: [1,0],
    default: 0,
  },
  isBestSeller: {
    type: Number,
    enum: [1,0],
    default: 0,
  },
  status: {
    type: Number,
    enum: [1,0],
    default: 0,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
