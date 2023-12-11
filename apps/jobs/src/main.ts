import { NestFactory } from '@nestjs/core';
import { JobsModule } from './jobs.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(JobsModule);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap();
