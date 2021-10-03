import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(data: any) {
    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (data.password != user.password) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id };

    user.password = undefined;
    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }
}
