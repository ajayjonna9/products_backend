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
    type: Boolean,
    default: false,
  },
  isBestSeller: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['available', 'out of stock'],
    default: 'available',
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
