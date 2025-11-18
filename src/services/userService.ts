import prisma from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'default_secret';
const SALT_ROUNDS = 10;

class UserService {
  static async createUser(username: string, password: string, role: string) {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return prisma.user.create({
      data: { username, password: hashedPassword, role }
    });
  }

  static async getUserById(id: number) {
    return prisma.user.findUnique({ where: { id } });
  }

  static async getAllUsers() {
    return prisma.user.findMany();
  }

  static async updateUser(id: number, data: Partial<{ username: string; password: string; role: string }>) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
    }
    return prisma.user.update({ where: { id }, data });
  }

  static async deleteUser(id: number) {
    return prisma.user.delete({ where: { id } });
  }

  static async authenticate(username: string, password: string) {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return null;

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, {
      expiresIn: '1h'
    });
    return { user, token };
  }
}

export default UserService;
