import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import appConfig from '@configs/app.config';
import databaseConfig from '@configs/database.config';

import { AuthenticationModule } from '@auth/authentication.module';
import { UserModule } from '@user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [databaseConfig.KEY],
      useFactory: (config: ConfigType<typeof databaseConfig>) => ({
        type: 'mysql',
        ...config,
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/configs/env/.${process.env.NODE_ENV}.env`],
      load: [appConfig, databaseConfig],
      cache: true,
      isGlobal: true,
    }),
    AuthenticationModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
