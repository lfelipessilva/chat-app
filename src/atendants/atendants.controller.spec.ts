import { Test, TestingModule } from '@nestjs/testing';
import { AtendantsController } from './atendants.controller';
import { AtendantsService } from './atendants.service';

describe('AtendantsController', () => {
  let controller: AtendantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtendantsController],
      providers: [AtendantsService],
    }).compile();

    controller = module.get<AtendantsController>(AtendantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
