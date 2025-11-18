import express, { Request, Response, RequestHandler } from 'express';
import UserController from '@controllers/userController';
import AuthMiddleware from '@middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthMiddleware.verifyToken, UserController.createUser as RequestHandler);

router.get('/:userId', AuthMiddleware.verifyToken, UserController.getUserById as RequestHandler);

router.get('/', AuthMiddleware.verifyToken, UserController.getAllUsers as RequestHandler);

router.patch('/:userId', AuthMiddleware.verifyToken, UserController.updateUser as RequestHandler);

router.delete('/:userId', AuthMiddleware.verifyToken, UserController.deleteUser as RequestHandler);

router.post('/login', UserController.login as RequestHandler);

export default router;
