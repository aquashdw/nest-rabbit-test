import { Module } from '@nestjs/common';
import { QueueProdController } from './queue-prod.controller';
import { QueueProdService } from './queue-prod.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'nest_producer',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672/'],
          queue: 'nest-job-queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [QueueProdController],
  providers: [QueueProdService],
})
export class QueueProdModule {}
