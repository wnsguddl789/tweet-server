import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT, 10) || 4000,
  NODE_ENV: 'development',
}));
