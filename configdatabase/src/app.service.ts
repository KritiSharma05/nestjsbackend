
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async createUser(dbName: string, userData): Promise<User> {
    const prisma = this.prismaService.getClient(dbName);
    return prisma.user.create({ data: userData });
  }

  async getUserById(id: string, dbName: string): Promise<User> {
    const prisma = this.prismaService.getClient(dbName);
    return prisma.user.findUnique({ where: { id } });
  }

  async getAllUsers(dbName: string): Promise<User[]> { // Updated to receive dbName
    const prisma = this.prismaService.getClient(dbName);
    return prisma.user.findMany(); // Fetch users from specified database
  }
  async updateUser(id: string, userData, dbName: string): Promise<User> {
    const prisma = this.prismaService.getClient(dbName);
    return prisma.user.update({ where: { id }, data: userData });
  }

  async deleteUser(id: string, dbName: string): Promise<User> {
    const prisma = this.prismaService.getClient(dbName);
    return prisma.user.delete({ where: { id } });
  }
}
