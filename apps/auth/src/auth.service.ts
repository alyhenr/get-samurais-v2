import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User, response: Response) {
    const tokenPayload = {
      userId: user.id,
    };

    const tokenExpiration = new Date();
    tokenExpiration.setSeconds(
      tokenExpiration.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const createdToken = this.jwtService.sign(tokenPayload);

    response.cookie('Authentication', createdToken, {
      httpOnly: true,
      expires: tokenExpiration,
    });
  }
}
