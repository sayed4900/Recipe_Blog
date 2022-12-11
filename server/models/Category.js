const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  img: {
    type: String,
    required: [true, 'Please provide an img'],
  },
});

module.exports = mongoose.model('Category', categorySchema);
