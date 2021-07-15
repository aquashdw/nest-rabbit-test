import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { QueueProdService } from './queue-prod.service';
import { JobSpecDto } from './dto/job-spec.dto';

@Controller()
export class QueueProdController {
  constructor(private readonly queueProdService: QueueProdService) {}

  @Get()
  getHello(): string {
    return this.queueProdService.getHello();
  }

  @Post('post/job')
  @HttpCode(HttpStatus.ACCEPTED)
  postMessage(@Body() dto: JobSpecDto) {
    this.queueProdService.postMessage(dto);
  }
}
