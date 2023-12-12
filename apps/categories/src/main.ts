import { NestFactory } from '@nestjs/core';
import { CategoriesModule } from './categories.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(CategoriesModule);

  const configService = app.get(ConfigService);

  app.use(cookieParser());

  await app.listen(configService.get('PORT'));
}
bootstrap();
