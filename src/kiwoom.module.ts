import { DynamicModule, Module } from '@nestjs/common';
import { KiwoomAsyncOptions, KiwoomOptions } from './interfaces';
import { KIWOOM_MODULE_OPTIONS } from './kiwoom.constants';
import { HttpModule } from '@nestjs/axios';
import { AccountService, ChartService, CreditOrderService, ETFService, ForeignInstitutionalService, MarketConditionService, Oauth2, OrderService, RankInfoService, SecuritiesLendingBorrowingService, SectorService, ShortSaleService, StockInfoService } from '@src/services';

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
				CreditOrderService,
				MarketConditionService,
				SecuritiesLendingBorrowingService,
				SectorService,
				StockInfoService,
			],
			exports: [ETFService, OrderService, AccountService, ShortSaleService, ForeignInstitutionalService, RankInfoService, ChartService, CreditOrderService, MarketConditionService, SecuritiesLendingBorrowingService, SectorService, StockInfoService],
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
				CreditOrderService,
				MarketConditionService,
				SecuritiesLendingBorrowingService,
				SectorService,
				StockInfoService,
			],
			exports: [ETFService, OrderService, AccountService, ShortSaleService, ForeignInstitutionalService, RankInfoService, ChartService, CreditOrderService, MarketConditionService, SecuritiesLendingBorrowingService, SectorService, StockInfoService],
		};
	}
}
