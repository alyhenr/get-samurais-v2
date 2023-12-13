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
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { CurrentUser, JwtAuthGuard } from '@app/common';
import { User } from '@prisma/client';

@Controller('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Delete(':providerId/:receiverId/:jobId')
  remove(
    @Param('providerId') providerId: string,
    @Param('receiverId') receiverId: string,
    @Param('jobId') jobId: string,
  ) {
    return this.contractsService.remove(providerId, receiverId, jobId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('status/:id')
  updateStatus(
    @Body() { status }: { status: string },
    @CurrentUser() user: User,
  ) {
    //TODO
    console.log(status, user);
  }
}
