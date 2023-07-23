import { AbstractEntity } from '@common/entities';

import { AuthenticationEntity } from '@auth/entities';
import { Entity, Column, OneToOne, JoinColumn, Index } from 'typeorm';

import { IsEmail } from 'class-validator';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity {
  @Column()
  @IsEmail()
  email: string;

  @OneToOne(
    () => AuthenticationEntity,
    (authentication: AuthenticationEntity) => authentication.user,
    { eager: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn()
  @Index()
  public authentication: AuthenticationEntity;

  @Column({ length: 16 })
  password: string;

  @Column()
  name: string;

  @Column()
  avatar: string;
}
