import express from 'express';
import ReservationController from '@controllers/reservationController';
import AuthMiddleware from '@middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthMiddleware.verifyToken, ReservationController.createReservation);

router.get('/:reservationId', AuthMiddleware.verifyToken, ReservationController.getReservationById);

router.delete('/:reservationId', AuthMiddleware.verifyToken, ReservationController.deleteReservation);

export default router;
