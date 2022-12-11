const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:category', recipeController.getRecipesOnCategory);
router.post('/search', recipeController.searchRecipe);

router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandomRecipe);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

module.exports = router;
