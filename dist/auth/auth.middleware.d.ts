import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class AuthMiddleware implements NestMiddleware {
    private jwt;
    constructor(jwt: JwtService);
    use(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
}
