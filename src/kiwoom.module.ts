import { DynamicModule, Module } from '@nestjs/common';
import { KiwoomAsyncOptions, KiwoomOptions } from './interfaces';
import { KIWOOM_MODULE_OPTIONS } from './kiwoom.constants';
import { HttpModule } from '@nestjs/axios';
import { ETFService, Oauth2 } from '@src/services';

@Module({
	imports: [HttpModule],
})
export class KiwoomModule {
	static register(options: KiwoomOptions): DynamicModule {
		return {
			module: KiwoomModule,
			imports: [HttpModule],
			providers: [{ provide: KIWOOM_MODULE_OPTIONS, useValue: options }, Oauth2, ETFService],
			exports: [ETFService],
		};
	}

	static registerAsync(options: KiwoomAsyncOptions): DynamicModule {
		return {
			module: KiwoomModule,
			imports: [HttpModule],
			providers: [{ provide: KIWOOM_MODULE_OPTIONS, useFactory: options.useFactory, inject: options.inject }, Oauth2, ETFService],
			exports: [ETFService],
		};
	}
}
