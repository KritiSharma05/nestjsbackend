import { Controller, Post, Body, Delete, Get, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('data')
  async signupUser(@Body() userData: { name?: string; email: string; birthYear?: number }): Promise<User> {
    return this.appService.createUser(userData);
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.appService.getUserById(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.appService.getAllUsers();
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() userData: { name?: string; email?: string; birthYear?: number }): Promise<User> {
    return this.appService.updateUser(id, userData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.appService.deleteUser(id);
  }
}
