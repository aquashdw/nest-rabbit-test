import { Injectable, Logger } from '@nestjs/common';
import { EventDto } from '../dto/event.dto';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class ExchangePublishService {
  private readonly logger = new Logger(ExchangePublishService.name);
  constructor(private readonly amqpConnection: AmqpConnection) {}

  getHello(): string {
    return 'Hello World!';
  }

  async postToFanout(dto: EventDto) {
    this.logger.log('publish to fanout');
    await this.amqpConnection.publish('nest.fanout.exchange', '', JSON.stringify(dto));
  }

  async postToDirect(dto: EventDto, routingKey: string) {
    this.logger.log('publish to direct');
    await this.amqpConnection.publish('nest.direct.exchange', routingKey, JSON.stringify(dto));
  }

  async postToTopic(dto: EventDto, routingKey: string) {
    this.logger.log('publish to topic');
    await this.amqpConnection.publish('nest.topic.exchange', routingKey, JSON.stringify(dto));
  }
}
