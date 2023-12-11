import { NestFactory } from '@nestjs/core';
import { ContractsModule } from './contracts.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ContractsModule);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap();
