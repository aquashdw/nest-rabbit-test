import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JobSpecDto } from './dto/job-spec.dto';

@Injectable()
export class QueueProdService {
  constructor(
    @Inject('nest_producer') private readonly jobQueueClient: ClientProxy,
  ) {}

  async onApplicationBootstrap() {
    await this.jobQueueClient.connect();
  }
  getHello(): string {
    return 'Hello World!';
  }

  postMessage(dto: JobSpecDto) {
    this.jobQueueClient.emit<any>('work_jobs', dto);
  }
}
