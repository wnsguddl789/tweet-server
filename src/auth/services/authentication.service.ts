import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';

import { AuthenticationEntity } from '@auth/entities';
import { RegistrationDto, CreateAuthenticationDto } from '@root/auth/dtos';

import { UserService } from '@user/services/user.service';
import { UserEntity } from '@user/entities';

import { UserAlreadyExistException } from '@root/auth/exceptions';

import { MysqlErrorCode } from '@database/constraints';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(AuthenticationEntity)
    private readonly authenticationRepository: Repository<AuthenticationEntity>,
    private readonly queryRunner: QueryRunner,
  ) {}

  public async registration(registrationDto: RegistrationDto): Promise<void> {
    // await this.queryRunner.connect();
    // await this.queryRunner.startTransaction();
    // try {
    //   const authentication = await this.createAuthentication(registrationDto);
    //   const user = await this.userService.createUser(
    //     registrationDto,
    //     authentication,
    //   );
    //   await this.queryRunner.commitTransaction();
    //   return user;
    // } catch (error) {
    //   await this.queryRunner.rollbackTransaction();
    //   if (error?.code === MysqlErrorCode.UniqueViolation) {
    //     throw new UserAlreadyExistException();
    //   }
    //   throw new InternalServerErrorException();
    // } finally {
    //   await this.queryRunner.release();
    // }
  }

  // public async createAuthentication(
  //   createAuthenticationDto: CreateAuthenticationDto,
  // ): Promise<AuthenticationEntity> {
  //   const authentication = this.authenticationRepository.create(
  //     createAuthenticationDto,
  //   );

  //   return this.queryRunner.manager.save(authentication);
  // }
}
