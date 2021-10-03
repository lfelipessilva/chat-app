import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { Body, Post } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/login')
  async login(@Body() data) {
    return this.authService.login(data);
  }
}
