import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class DatabaseMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const dbName = req.headers['x-db-name'] as string;
    if (!dbName) {
      return res.status(400).send('Database name header is missing');
    }
    req['dbName'] = dbName;
    next();
  }
}
