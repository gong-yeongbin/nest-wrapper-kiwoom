import { DynamicModule, Module } from '@nestjs/common';
import { KiwoomAsyncOptions, KiwoomOptions } from './interfaces';
import { KIWOOM_MODULE_OPTIONS } from './kiwoom.constants';
import { HttpModule } from '@nestjs/axios';
import { AccountService, ChartService, ETFService, ForeignInstitutionalService, KiwoomWebSocketService, Oauth2, OrderService, RankInfoService, ShortSaleService } from '@src/services';

@Module({
	imports: [HttpModule],
})
export class KiwoomModule {
	static register(options: KiwoomOptions): DynamicModule {
		return {
			module: KiwoomModule,
			imports: [HttpModule],
			providers: [
				{ provide: KIWOOM_MODULE_OPTIONS, useValue: options },
				Oauth2,
				OrderService,
				ETFService,
				AccountService,
				ShortSaleService,
				ForeignInstitutionalService,
				RankInfoService,
				ChartService,
				KiwoomWebSocketService,
			],
			exports: [ETFService, OrderService, AccountService, ShortSaleService, ForeignInstitutionalService, RankInfoService, ChartService, KiwoomWebSocketService],
		};
	}

	static registerAsync(options: KiwoomAsyncOptions): DynamicModule {
		return {
			module: KiwoomModule,
			imports: [HttpModule],
			providers: [
				{ provide: KIWOOM_MODULE_OPTIONS, useFactory: options.useFactory, inject: options.inject },
				Oauth2,
				OrderService,
				ETFService,
				AccountService,
				ShortSaleService,
				ForeignInstitutionalService,
				RankInfoService,
				ChartService,
				KiwoomWebSocketService,
			],
			exports: [ETFService, OrderService, AccountService, ShortSaleService, ForeignInstitutionalService, RankInfoService, ChartService, KiwoomWebSocketService],
		};
	}
}
