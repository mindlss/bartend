import { Request, Response } from 'express';
import UserService from '@services/userService';

class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const { username, password, role } = req.body;
      const user = await UserService.createUser(username, password, role);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(Number(req.params.userId));
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const data = req.body;
      const user = await UserService.updateUser(Number(req.params.userId), data);
      res.json(user);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      await UserService.deleteUser(Number(req.params.userId));
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const result = await UserService.authenticate(username, password);
      if (!result) return res.status(401).json({ message: 'Invalid credentials' });
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }
}

export default UserController;
