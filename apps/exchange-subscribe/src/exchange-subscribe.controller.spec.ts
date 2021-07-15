import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeSubscribeController } from './exchange-subscribe.controller';
import { ExchangeSubscribeService } from './exchange-subscribe.service';

describe('ExchangeSubscribeController', () => {
  let exchangeSubscribeController: ExchangeSubscribeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExchangeSubscribeController],
      providers: [ExchangeSubscribeService],
    }).compile();

    exchangeSubscribeController = app.get<ExchangeSubscribeController>(ExchangeSubscribeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(exchangeSubscribeController.getHello()).toBe('Hello World!');
    });
  });
});
