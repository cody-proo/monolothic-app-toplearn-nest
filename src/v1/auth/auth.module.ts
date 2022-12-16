import { UsersModule } from './../users/users.module';
import { forwardRef, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GenericRepository } from 'src/common/repositories/generic.repository';
import { TokenService } from 'src/common/services/token.service';
import { RefreshTokenModule } from '../refresh-token/refresh-token.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [RefreshTokenModule, forwardRef(() => UsersModule)],
  controllers: [AuthController],
  providers: [AuthService, GenericRepository, TokenService, JwtService],
})
export class AuthModule {}
