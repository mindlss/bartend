import express from 'express';
import RecipeController from '@controllers/recipeController';
import AuthMiddleware from '@middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthMiddleware.verifyToken, RecipeController.createRecipe);

router.get('/:recipeId', RecipeController.getRecipeById);

router.get('/', RecipeController.getRecipes);

router.patch('/:recipeId', AuthMiddleware.verifyToken, RecipeController.updateRecipe);

router.delete('/:recipeId', AuthMiddleware.verifyToken, RecipeController.deleteRecipe);

export default router;
