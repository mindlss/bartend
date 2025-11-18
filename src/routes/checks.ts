import express from 'express';
import CheckController from '@controllers/checkController';
import AuthMiddleware from '@middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthMiddleware.verifyToken, CheckController.createCheck);

router.get('/:checkId', CheckController.getCheckById);

router.get('/', CheckController.getChecks);

router.patch('/:checkId', AuthMiddleware.verifyToken, CheckController.updateCheck);

router.post('/:checkId/confirm', AuthMiddleware.verifyToken, CheckController.confirmCheck);

router.delete('/:checkId', AuthMiddleware.verifyToken, CheckController.deleteCheck);

export default router;
