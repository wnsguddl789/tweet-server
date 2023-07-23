import {
  Body,
  Inject,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
} from '@nestjs/common';

import { AuthenticationService } from '@root/auth/services';
import { RegistrationDto } from '../dtos';
import { UserEntity } from '@root/user/entities';

@Controller('auth')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Get()
  public getAuth() {
    return 'hh';
  }

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async registration(
    @Body() registrationDto: RegistrationDto,
  ): Promise<void> {
    // return this.authenticationService.registration(registrationDto);
  }
}
