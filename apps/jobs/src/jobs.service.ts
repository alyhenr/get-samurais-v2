import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobsRepository } from './jobs.repository';

@Injectable()
export class JobsService {
  constructor(private readonly jobsRepository: JobsRepository) {}

  async create(createJobDto: CreateJobDto & { userId: string }) {
    try {
      return await this.jobsRepository.create(createJobDto);
    } catch (error) {
      throw new BadRequestException('This categorie is not listed');
    }
  }

  findAll() {
    return this.jobsRepository.findAll();
  }

  findOne(id: string) {
    return this.jobsRepository.findOne(id);
  }

  async update(jobId: string, updateJobDto: UpdateJobDto & { userId: string }) {
    this.checkPermission(jobId, updateJobDto.userId);

    delete updateJobDto.userId;
    return this.jobsRepository.update(jobId, updateJobDto);
  }

  remove(jobId: string, userId: string) {
    this.checkPermission(jobId, userId);
    return this.jobsRepository.remove(jobId);
  }

  private async checkPermission(jobId, userId) {
    const job = await this.jobsRepository.findOne(jobId);

    if (!job) throw new NotFoundException('Job does not exist');

    if (job.userId !== userId)
      throw new UnauthorizedException('User does not own the job offer');
  }
}
