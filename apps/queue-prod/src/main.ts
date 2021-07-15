import { NestFactory } from '@nestjs/core';
import { QueueProdModule } from './queue-prod.module';

async function bootstrap() {
  const app = await NestFactory.create(QueueProdModule);
  await app.listen(3000);
}
bootstrap();
