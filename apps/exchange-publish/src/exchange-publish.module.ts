import { Module } from '@nestjs/common';
import { ExchangePublishController } from './exchange-publish.controller';
import { ExchangePublishService } from './exchange-publish.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule,{
    exchanges: [
      {
        name: 'nest-fanout-exchange',
        type: 'fanout',
      },
      {
        name: 'nest-topic-exchange',
        type: 'topic',
      },
      {
        name: 'nest-direct-exchange',
        type: 'direct'
      }
    ],
    uri: 'amqp://guest:guest@localhost:5672/',
    connectionInitOptions: {
      wait: false
    }
  })],
  controllers: [ExchangePublishController],
  providers: [ExchangePublishService],
})
export class ExchangePublishModule {}
