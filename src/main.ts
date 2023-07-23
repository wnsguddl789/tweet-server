import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

import { setupSwagger } from '@utils/setupSwagger';

import { AppModule } from './app.module';
import { NODE_ENV } from '@app/constants';

import appConfiguration from '@configs/app.config';

async function bootstrap() {
  const appConfig = appConfiguration();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  setupSwagger(app);
  await app.listen(appConfig.port);
}
bootstrap();
