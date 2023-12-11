import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobsRepository } from './jobs.repository';

@Injectable()
export class JobsService {
  constructor(private readonly jobsRepository: JobsRepository) {}

  create(createJobDto: CreateJobDto) {
    return this.jobsRepository.create(createJobDto);
  }

  findAll() {
    return this.jobsRepository.findAll();
  }

  findOne(id: string) {
    return this.jobsRepository.findOne(id);
  }

  update(id: string, updateJobDto: UpdateJobDto) {
    return this.jobsRepository.update(id, updateJobDto);
  }

  remove(id: string) {
    return this.jobsRepository.remove(id);
  }
}
