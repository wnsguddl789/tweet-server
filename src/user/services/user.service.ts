import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QueryRunner, Repository } from 'typeorm';

import { CreateUserDto } from '@user/dtos';
import { AuthenticationEntity } from '@root/auth/entities';

import { UserEntity } from '@user/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private queryRunner: QueryRunner,
  ) {}

  public async createUser(
    createUserDto: CreateUserDto,
    authentication: AuthenticationEntity,
  ): Promise<UserEntity> {
    const user = this.userRepository.create({
      ...createUserDto,
      authentication,
    });

    return this.queryRunner.manager.save(user);
  }
}
