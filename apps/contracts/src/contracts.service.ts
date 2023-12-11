import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { ContractsRepository } from './contracts.repository';

@Injectable()
export class ContractsService {
  constructor(private readonly contractsRepository: ContractsRepository) {}

  create(createContractDto: CreateContractDto) {
    return this.contractsRepository.create(createContractDto);
  }

  findAll() {
    return this.contractsRepository.findAll();
  }

  findOne(providerId: string, receiverId: string, jobId: string) {
    return this.contractsRepository.findOne(providerId, receiverId, jobId);
  }

  update(
    providerId: string,
    receiverId: string,
    jobId: string,
    updateContractDto: UpdateContractDto,
  ) {
    return this.contractsRepository.update(
      providerId,
      receiverId,
      jobId,
      updateContractDto,
    );
  }

  remove(providerId: string, receiverId: string, jobId: string) {
    return this.contractsRepository.remove(providerId, receiverId, jobId);
  }
}
