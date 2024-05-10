// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { ConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    ConfigService, 
  ],
})
export class AppModule {}
