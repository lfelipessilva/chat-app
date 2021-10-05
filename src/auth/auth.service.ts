import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      if (await bcrypt.compare(pass, user.password)) {
        user.password = undefined;
        return user;
      }
      return null;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id };
    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }
}
