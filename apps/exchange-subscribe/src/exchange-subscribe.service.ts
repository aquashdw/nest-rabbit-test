import { Injectable, Logger } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { randomUUID } from 'crypto';
import { EventDto } from './dto/event.dto';

@Injectable()
export class ExchangeSubscribeService {
  private readonly logger = new Logger(ExchangeSubscribeService.name);

  @RabbitSubscribe({
    exchange: 'nest.fanout.exchange',
    routingKey: '',
    queue: `fanout-${randomUUID()}`
  })
  async fanoutSubHandler(dto: EventDto){
    this.logger.log(`received message from fanout exchange: ${JSON.stringify(dto)}`)
  }

  @RabbitSubscribe({
    exchange: 'nest.direct.exchange',
    routingKey: 'test.direct.route',
    queue: `direct-${randomUUID()}`
  })
  async directSubHandler(dto: EventDto){
    this.logger.log(`received message from direct exchange: ${JSON.stringify(dto)}`)
  }

  @RabbitSubscribe({
    exchange: 'nest.topic.exchange',
    routingKey: 'test.topic.*',
    queue: `topic-${randomUUID()}`
  })
  async topicSubHandler(dto: EventDto){
    this.logger.log(`received message from topic exchange: ${JSON.stringify(dto)}`)
  }
}
