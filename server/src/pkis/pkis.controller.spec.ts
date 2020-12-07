import { Test, TestingModule } from '@nestjs/testing';
import { PkisController } from './pkis.controller';

describe('PkisController', () => {
  let controller: PkisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkisController],
    }).compile();

    controller = module.get<PkisController>(PkisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
