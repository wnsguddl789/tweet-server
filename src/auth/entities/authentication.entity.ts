import { AbstractEntity } from '@common/entities';
import { Entity, Column, OneToOne } from 'typeorm';

import { Exclude } from 'class-transformer';
import { UserEntity } from '@user/entities';

@Entity({ name: 'authentications' })
export class AuthenticationEntity extends AbstractEntity {
  @Column({ unique: true })
  public email: string;

  @Column({ length: 16 })
  @Exclude()
  public password: string;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.authentication)
  @Exclude()
  user: UserEntity;
}
