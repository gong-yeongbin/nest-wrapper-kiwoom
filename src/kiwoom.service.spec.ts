import { Test, TestingModule } from '@nestjs/testing';
import { KiwoomService } from './kiwoom.service';

describe('KiwoomService', () => {
	let service: KiwoomService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [KiwoomService],
		}).compile();

		service = module.get<KiwoomService>(KiwoomService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
