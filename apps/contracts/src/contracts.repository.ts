import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@Injectable()
export class ContractsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContractDto: CreateContractDto) {
    return await this.prisma.contract.create({
      data: { ...createContractDto },
    });
  }

  async findAll() {
    return await this.prisma.contract.findMany({
      include: { provider: true, receiver: true },
    });
  }

  async findOne(providerId: string, receiverId: string, jobId: string) {
    return await this.prisma.contract.findUnique({
      where: { providerId_receiverId_jobId: { providerId, receiverId, jobId } },
      include: { provider: true, receiver: true },
    });
  }

  async update(
    providerId: string,
    receiverId: string,
    jobId: string,
    updateContractDto: UpdateContractDto,
  ) {
    return await this.prisma.contract.update({
      where: { providerId_receiverId_jobId: { providerId, receiverId, jobId } },
      data: { ...updateContractDto },
    });
  }

  async remove(providerId: string, receiverId: string, jobId: string) {
    return await this.prisma.contract.delete({
      where: { providerId_receiverId_jobId: { providerId, receiverId, jobId } },
    });
  }
}
