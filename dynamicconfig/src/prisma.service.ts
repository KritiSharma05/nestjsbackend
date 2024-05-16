import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from './config.service';

@Injectable()
export class PrismaService {
  private prisma: PrismaClient;

  constructor(private readonly configService: ConfigService) {
    const dbName = process.env.DATABASE_NAME;
    if (!dbName) {
      throw new Error('Database name not found in environment variables');
    }
    console.log(`Using database: ${dbName}`);
    const url = this.configService.getMongoUrl(dbName);
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url,
        },
      },
    });
  }

  getClient(): PrismaClient {
    return this.prisma;
  }
}
