import { Injectable, Logger } from '@nestjs/common';
import { JobSpecDto } from './dto/job-spec.dto';

@Injectable()
export class QueueConsService {
  private readonly logger: Logger = new Logger();

  async processJob(dto: JobSpecDto){
    this.logger.log('start process');
    await new Promise(r => setTimeout(r, dto.wait * 1000));
    this.logger.log('end process');
  }
}
