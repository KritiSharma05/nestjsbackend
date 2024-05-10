// prisma.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from './config.service';

@Injectable()
export class PrismaService {
  constructor(private readonly configService: ConfigService) {}

  getClient(dbName: string): PrismaClient {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: this.configService.getMongoUrl(dbName),
        },
      },
    });
    return prisma;
  }
}
