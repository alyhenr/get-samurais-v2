import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post()
  create(@Body() createContractDto: CreateContractDto) {
    return this.contractsService.create(createContractDto);
  }

  @Get()
  findAll() {
    return this.contractsService.findAll();
  }

  @Get(':providerId/:receiverId/:jobId')
  findOne(
    @Param('providerId') providerId: string,
    @Param('receiverId') receiverId: string,
    @Param('jobId') jobId: string,
  ) {
    return this.contractsService.findOne(providerId, receiverId, jobId);
  }

  @Patch(':providerId/:receiverId/:jobId')
  update(
    @Param('providerId') providerId: string,
    @Param('receiverId') receiverId: string,
    @Param('jobId') jobId: string,
    @Body() updateContractDto: UpdateContractDto,
  ) {
    return this.contractsService.update(
      providerId,
      receiverId,
      jobId,
      updateContractDto,
    );
  }

  @Delete(':providerId/:receiverId/:jobId')
  remove(
    @Param('providerId') providerId: string,
    @Param('receiverId') receiverId: string,
    @Param('jobId') jobId: string,
  ) {
    return this.contractsService.remove(providerId, receiverId, jobId);
  }
}
