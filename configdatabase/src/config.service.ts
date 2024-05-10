
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    getMongoUrl(dbName: string): string {
        const envVarName = `DATABASE_URL_${dbName.toUpperCase()}`;
        const url = process.env[envVarName];
        if (!url) {
          throw new Error(`Database URL not found for ${dbName}`);
        }
        return url;
    }
}
