import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async createUser(userData): Promise<User> {
    const prisma = this.prismaService.getClient();
    return prisma.user.create({ data: userData });
  }

  async getUserById(id: string): Promise<User> {
    const prisma = this.prismaService.getClient();
    return prisma.user.findUnique({ where: { id } });
  }

  async getAllUsers(): Promise<User[]> {
    const prisma = this.prismaService.getClient();
    return prisma.user.findMany();
  }

  async updateUser(id: string, userData): Promise<User> {
    const prisma = this.prismaService.getClient();
    return prisma.user.update({ where: { id }, data: userData });
  }

  async deleteUser(id: string): Promise<User> {
    const prisma = this.prismaService.getClient();
    return prisma.user.delete({ where: { id } });
  }
}
