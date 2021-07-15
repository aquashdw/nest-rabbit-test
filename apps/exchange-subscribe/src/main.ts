import { NestFactory } from '@nestjs/core';
import { ExchangeSubscribeModule } from './exchange-subscribe.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ExchangeSubscribeModule);
  await app.listen();
}
bootstrap();
