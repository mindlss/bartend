import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'default_secret';

class AuthMiddleware {
  static verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json({ message: 'Invalid token' });
        return;
      }
      // @ts-ignore
      req.user = user;
      next();
    });
  }

  static requireRole(role: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      // @ts-ignore
      if (!req.user || req.user.role !== role) {
        res.status(403).json({ message: 'Forbidden' });
        return;
      }
      next();
    };
  }
}

export default AuthMiddleware;
