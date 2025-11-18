import express from 'express';
import ShiftController from '@controllers/shiftController';
import AuthMiddleware from '@middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthMiddleware.verifyToken, ShiftController.openShift);

router.patch('/:shiftId/close', AuthMiddleware.verifyToken, ShiftController.closeShift);

router.get('/:shiftId', AuthMiddleware.verifyToken, ShiftController.getShiftById);

router.get('/', AuthMiddleware.verifyToken, ShiftController.getShifts);

export default router;
