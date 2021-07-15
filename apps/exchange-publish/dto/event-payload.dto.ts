import { EventDto } from './event.dto';
import { PartialType } from '@nestjs/mapped-types';

export class EventPayloadDto extends PartialType(EventDto){
  publishType: string;
}
