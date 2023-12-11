import { Test, TestingModule } from '@nestjs/testing';
import { ContractsController } from './contracts.controller';
import { ContractsService } from './contracts.service';

describe('ContractsController', () => {
  let contractsController: ContractsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ContractsController],
      providers: [ContractsService],
    }).compile();

    contractsController = app.get<ContractsController>(ContractsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(contractsController.getHello()).toBe('Hello World!');
    });
  });
});
