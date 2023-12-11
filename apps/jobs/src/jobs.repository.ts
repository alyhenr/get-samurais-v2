import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createJobDto: CreateJobDto) {
    return await this.prisma.job.create({
      data: { ...createJobDto },
    });
  }

  async findAll() {
    return await this.prisma.job.findMany({
      include: { user: true, categorie: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.job.findUnique({
      where: { id },
      include: { user: true, categorie: true },
    });
  }

  async update(id: string, updateJobDto: UpdateJobDto) {
    return await this.prisma.user.update({
      where: { id },
      data: { ...updateJobDto },
    });
  }

  async remove(id: string) {
    return await this.prisma.job.delete({
      where: { id },
    });
  }
}
