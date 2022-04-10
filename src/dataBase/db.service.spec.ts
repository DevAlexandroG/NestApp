import { Test, TestingModule } from '@nestjs/testing';
import { DBService } from './DB.service';

describe('DatabaseService', () => {
  let service: DBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DBService],
    }).compile();

    service = module.get<DBService>(DBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
