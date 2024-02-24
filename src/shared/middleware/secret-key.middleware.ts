// secret-key.middleware.ts
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SecretKeyMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const secretKey = req.headers['secret-key'] || req.query['secret-key'];
    const expectedSecretKey = this.configService.get<string>('SECRET_KEY');

    if (secretKey !== expectedSecretKey) {
      throw new UnauthorizedException('Invalid secret key');
    }

    next();
  }
}
