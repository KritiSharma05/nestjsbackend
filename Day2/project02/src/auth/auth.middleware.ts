import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    
    // Here, you can implement your authentication logic, such as validating the token.
    // For this example, let's assume a valid token is "mySecretToken".
    if (token !== 'mySecretToken') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  }
}
