import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(data: any) {
    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (data.password != user.password) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id };

    user.password = undefined;

    // return {
    //   user,
    //   token: this.jwtService.sign(payload),
    // };

    const headerToken = req.headers.authorization;

    if (!headerToken) {
      return res.status(401).send({ error: 'No token provided' });
    }

    const [scheme, token] = headerToken.split(' ');

    if (!token) {
      return res.status(401).send({ error: 'Token error' });
    }

    try {
      const user = jwt.verify(token);

      req.user = user.id;

      return next();
    } catch (error) {
      return res.status(401).send({ error: 'Invalid token' });
    }
  }
}
