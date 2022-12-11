const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  description: {
    type: String,
    required: [true, 'this field is required '],
  },
  email: {
    type: String,
    required: [true, 'this field is required '],
  },
  ingredients: {
    type: Array,
    required: [true, 'this field is required '],
  },
  category: {
    type: String,
    enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
    required: [true, 'this field is required '],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image'],
  },
});
//search by description does't work!
recipeSchema.index({ name: 'text', description: 'text' });
// recipeSchema.index({ description: 'text' });
// WiilCard Indexing
// recipeSchema.index({ "$""": 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);
