import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { CurrentUser, JwtAuthGuard } from '@app/common';
import { User } from '@prisma/client';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createJobDto: CreateJobDto, @CurrentUser() user: User) {
    const createJobDtoWithUserId = { ...createJobDto, userId: user.id };
    return await this.jobsService.create(createJobDtoWithUserId);
  }

  @Get()
  async findAll() {
    return await this.jobsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.jobsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto,
    @CurrentUser() user: User,
  ) {
    const updateJobDtoWithUserId = { ...updateJobDto, userId: user.id };
    return await this.jobsService.update(id, updateJobDtoWithUserId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() user: User) {
    return await this.jobsService.remove(id, user.id);
  }
}
