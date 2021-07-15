import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueConsService {
  getHello(): string {
    return 'Hello World!';
  }
}
