import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigService } from '../../env-config.service';
import { EnvConfigModule } from '../../env-config.module';

describe('EnvConfigService unit tests', () => {
  // sut: System Under Testing
  let sut: EnvConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvConfigService],
      imports: [EnvConfigModule.forRoot()],
    }).compile();

    sut = module.get<EnvConfigService>(EnvConfigService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should return the PORT variable', () => {
    expect(sut.getAppPort()).toBe(3000);
  });

  it('should return the NODE_ENV variable', () => {
    expect(sut.getNodeEnv()).toBe('test');
  });
});
