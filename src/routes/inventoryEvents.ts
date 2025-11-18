import express from 'express';
import InventoryEventController from '@controllers/inventoryEventController';
import AuthMiddleware from '@middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthMiddleware.verifyToken, InventoryEventController.createInventoryEvent);

router.get('/:eventId', AuthMiddleware.verifyToken, InventoryEventController.getInventoryEventById);

router.get('/', AuthMiddleware.verifyToken, InventoryEventController.getInventoryEvents);

export default router;
