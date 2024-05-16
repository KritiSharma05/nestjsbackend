import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  getMongoUrl(dbName: string): string {
    const baseUrl = process.env.DATABASE_URL_BASE;
    if (!baseUrl) {
      throw new Error('Base database URL not found');
    }
    return `${baseUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
  }
}
