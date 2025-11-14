import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import { KT10000Params, KT10000Response } from '@src/types';

@Injectable()
export class OrderService implements OnModuleInit {
	private readonly headers: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {}

	async onModuleInit() {
		this.headers['authorization'] = await this.oauth2.getBearerToken();
	}

	async kt10000(kt10000Params: KT10000Params): Promise<KT10000Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt10000' };
			const params = { ...kt10000Params };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/etf', params, { headers });
			return response.data as KT10000Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
