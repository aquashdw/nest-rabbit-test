import { Controller, Get } from '@nestjs/common';
import { QueueConsService } from './queue-cons.service';
import { EventPattern } from '@nestjs/microservices';
import { JobSpecDto } from './dto/job-spec.dto';

@Controller()
export class QueueConsController {
  constructor(private readonly queueConsService: QueueConsService) {}

  @EventPattern('work_jobs')
  async handleMessagePrinted(dto: JobSpecDto) {
    await this.queueConsService.processJob(dto);
  }
}
