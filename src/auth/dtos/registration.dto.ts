import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegistrationDto {
  @IsEmail()
  @IsNotEmpty()
  readonly emailAddress: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
