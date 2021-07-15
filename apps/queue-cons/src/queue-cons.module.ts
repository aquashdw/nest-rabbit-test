import { Module } from '@nestjs/common';
import { QueueConsController } from './queue-cons.controller';
import { QueueConsService } from './queue-cons.service';

@Module({
  imports: [],
  controllers: [QueueConsController],
  providers: [QueueConsService],
})
export class QueueConsModule {}
