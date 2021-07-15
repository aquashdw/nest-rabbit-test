import { Module } from '@nestjs/common';
import { ExchangeSubscribeService } from './exchange-subscribe.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule,{
    exchanges: [
      {
        name: 'nest.fanout.exchange',
        type: 'fanout',
      },
      {
        name: 'nest.topic.exchange',
        type: 'topic',
      },
      {
        name: 'nest.direct.exchange',
        type: 'direct'
      }
    ],
    uri: 'amqp://guest:guest@localhost:5672/',
    connectionInitOptions: {
      wait: false
    }
  })],
  controllers: [],
  providers: [ExchangeSubscribeService],
})
export class ExchangeSubscribeModule {}
