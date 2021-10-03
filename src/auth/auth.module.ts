import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthMiddleware } from './auth.middleware';
@Module({
  imports: [
    JwtService,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1day' },
    }),
  ],
  providers: [AuthMiddleware],
  exports: [AuthMiddleware],
})
export class AuthModule {}
