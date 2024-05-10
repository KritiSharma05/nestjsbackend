
import { Controller, Post, Body, Delete, Get, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('data/:dbName')
  async signupUser(@Param('dbName') dbName: string, @Body() userData: { name?: string; email: string; birthYear?: number}): Promise<User> {
    return this.appService.createUser(dbName, userData);
  }

  @Get(':id/:dbName')
  async getUser(@Param('id') id: string, @Param('dbName') dbName: string): Promise<User> {
    return this.appService.getUserById(id, dbName);
  }

  @Get(':dbName') 
async getAllUsers(@Param('dbName') dbName: string): Promise<User[]> {
  return this.appService.getAllUsers(dbName); 
}

  @Patch(':id/:dbName') 
  async updateUser(@Param('id') id: string, @Body() userData: { name?: string; email?: string; birthYear?: number }, @Param('dbName') dbName: string): Promise<User> {
    return this.appService.updateUser(id, userData, dbName); 
  }

  @Delete(':id/:dbName') 
  async deleteUser(@Param('id') id: string, @Param('dbName') dbName: string): Promise<User> {
    return this.appService.deleteUser(id, dbName); 
  }
}
