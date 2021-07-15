import { Test, TestingModule } from '@nestjs/testing';
import { QueueConsController } from './queue-cons.controller';
import { QueueConsService } from './queue-cons.service';

describe('QueueConsController', () => {
  let queueConsController: QueueConsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QueueConsController],
      providers: [QueueConsService],
    }).compile();

    queueConsController = app.get<QueueConsController>(QueueConsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(queueConsController.getHello()).toBe('Hello World!');
    });
  });
});
