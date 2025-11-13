import { Module } from '@nestjs/common';
import { KiwoomService } from './kiwoom.service';

@Module({
	providers: [KiwoomService],
	exports: [KiwoomService],
})
export class KiwoomModule {}
