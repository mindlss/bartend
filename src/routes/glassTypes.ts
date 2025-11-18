import express from 'express';
import GlassTypeController from '@controllers/glassTypeController';
import AuthMiddleware from '@middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthMiddleware.verifyToken, GlassTypeController.createGlassType);

router.get('/:glassTypeId', GlassTypeController.getGlassTypeById);

router.get('/', GlassTypeController.getGlassTypes);

router.patch('/:glassTypeId', AuthMiddleware.verifyToken, GlassTypeController.updateGlassType);

router.delete('/:glassTypeId', AuthMiddleware.verifyToken, GlassTypeController.deleteGlassType);

export default router;
