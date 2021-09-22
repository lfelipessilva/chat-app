import { Test, TestingModule } from '@nestjs/testing';
import { AtendantsService } from './atendants.service';

describe('AtendantsService', () => {
  let service: AtendantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtendantsService],
    }).compile();

    service = module.get<AtendantsService>(AtendantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
