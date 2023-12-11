import { Controller, Get } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Controller()
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Get()
  getHello(): string {
    return this.contractsService.getHello();
  }
}
