import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthMiddleware } from './auth/auth.middleware';

@Controller('protected')
@UseGuards(AuthMiddleware) // Use the @UseGuards decorator to apply the middleware
export class ProtectedController {
  @Get()
  getData() {
    return 'This data is protected!';
  }
}
