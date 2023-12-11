import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { ConfigModule } from '@nestjs/config';
import { JobsRepository } from './jobs.repository';
import { PrismaModule } from '../../../prisma';
import * as Joi from 'joi';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/jobs/.env',
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [JobsController],
  providers: [JobsService, JobsRepository],
})
export class JobsModule {}
