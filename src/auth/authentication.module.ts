import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthenticationController } from '@auth/controllers';
import { AuthenticationService } from '@auth/services';
import { AuthenticationEntity } from '@auth/entities';

import { UserModule } from '@user/user.module';
import { UserService } from '@user/services';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([AuthenticationEntity])],
  providers: [AuthenticationService, UserService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
