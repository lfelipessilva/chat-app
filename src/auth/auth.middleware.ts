import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Authenticate implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const headerToken = req.headers.authorization;

    if (!headerToken) {
      return res.status(401).send({ error: 'No token provided' });
    }

    const [scheme, token] = headerToken.split(' ');

    if (!token) {
      return res.status(401).send({ error: 'Token error' });
    }

    try {
      const user = this.jwtService.verify(token);

      req.user = user.id;

      return next();
    } catch (error) {
      return res.status(401).send({ error: 'Invalid token' });
    }
  }
}
