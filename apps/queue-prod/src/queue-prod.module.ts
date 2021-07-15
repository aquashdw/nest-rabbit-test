import { Module } from '@nestjs/common';
import { QueueProdController } from './queue-prod.controller';
import { QueueProdService } from './queue-prod.service';

@Module({
  imports: [],
  controllers: [QueueProdController],
  providers: [QueueProdService],
})
export class QueueProdModule {}
