import { NestFactory } from '@nestjs/core';
import { ExchangePublishModule } from './exchange-publish.module';

async function bootstrap() {
  const app = await NestFactory.create(ExchangePublishModule);
  await app.listen(3000);
}
bootstrap();
