import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { ExchangePublishService } from './exchange-publish.service';
import { EventPayloadDto } from '../dto/event-payload.dto';

@Controller()
export class ExchangePublishController {
  private readonly logger = new Logger()

  constructor(private readonly exchangePublishService: ExchangePublishService) {}

  @Get()
  getHello(): string {
    return this.exchangePublishService.getHello();
  }

  @Post('post/event')
  @HttpCode(HttpStatus.ACCEPTED)
  async postEvent(@Body() eventPayloadDto: EventPayloadDto) {
    this.logger.log(`received: ${eventPayloadDto}`)
    switch (eventPayloadDto.publishType) {
      case 'fanout':
        await this.exchangePublishService.postToFanout({
          eventId: eventPayloadDto.eventId,
          eventMessage: eventPayloadDto.eventMessage,
          eventTimeString: eventPayloadDto.eventTimeString
        });
        break;
      case 'direct':
        await this.exchangePublishService.postToDirect({
          eventId: eventPayloadDto.eventId,
          eventMessage: eventPayloadDto.eventMessage,
          eventTimeString: eventPayloadDto.eventTimeString
        }, 'nest.direct.route');
        break;
      case 'topic':
        await this.exchangePublishService.postToTopic({
          eventId: eventPayloadDto.eventId,
          eventMessage: eventPayloadDto.eventMessage,
          eventTimeString: eventPayloadDto.eventTimeString
        }, 'nest.topic.route');
        break;
    }
  }
}
