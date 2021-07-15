import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueProdService {
  getHello(): string {
    return 'Hello World!';
  }
}
