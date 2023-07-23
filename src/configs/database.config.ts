import { registerAs } from '@nestjs/config';

import { AuthenticationSubscriber } from '@auth/subscribers';

import { SnakeNamingStrategy } from '@database/strategies';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'azxs4125',
  database: process.env.DATABASE_NAME || 'tweet',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: true,
  subscribers: [AuthenticationSubscriber],
}));
