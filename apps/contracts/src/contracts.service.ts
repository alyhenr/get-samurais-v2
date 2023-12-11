import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractsService {
  getHello(): string {
    return 'Hello World!';
  }
}
