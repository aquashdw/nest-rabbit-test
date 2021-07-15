import { Test, TestingModule } from '@nestjs/testing';
import { QueueProdController } from './queue-prod.controller';
import { QueueProdService } from './queue-prod.service';

describe('QueueProdController', () => {
  let queueProdController: QueueProdController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QueueProdController],
      providers: [QueueProdService],
    }).compile();

    queueProdController = app.get<QueueProdController>(QueueProdController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(queueProdController.getHello()).toBe('Hello World!');
    });
  });
});
