import { Test, TestingModule } from '@nestjs/testing';
import { ExchangePublishController } from './exchange-publish.controller';
import { ExchangePublishService } from './exchange-publish.service';

describe('ExchangePublishController', () => {
  let exchangePublishController: ExchangePublishController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExchangePublishController],
      providers: [ExchangePublishService],
    }).compile();

    exchangePublishController = app.get<ExchangePublishController>(ExchangePublishController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(exchangePublishController.getHello()).toBe('Hello World!');
    });
  });
});
