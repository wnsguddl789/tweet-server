import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from '@user/services';

import { UserEntity } from '@user/entities';
import { AuthenticationEntity } from '@auth/entities';

@Module({
  // imports: [TypeOrmModule.forFeature([UserEntity, AuthenticationEntity])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
