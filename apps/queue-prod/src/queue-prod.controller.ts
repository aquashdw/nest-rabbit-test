import { Controller, Get } from '@nestjs/common';
import { QueueProdService } from './queue-prod.service';

@Controller()
export class QueueProdController {
  constructor(private readonly queueProdService: QueueProdService) {}

  @Get()
  getHello(): string {
    return this.queueProdService.getHello();
  }
}
