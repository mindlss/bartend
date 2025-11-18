import express from 'express';
import IngredientController from '@controllers/ingredientController';
import AuthMiddleware from '@middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthMiddleware.verifyToken, IngredientController.createIngredient);

router.get('/:ingredientId', IngredientController.getIngredientById);

router.get('/', IngredientController.getIngredients);

router.patch('/:ingredientId', AuthMiddleware.verifyToken, IngredientController.updateIngredient);

router.delete('/:ingredientId', AuthMiddleware.verifyToken, IngredientController.deleteIngredient);

export default router;
