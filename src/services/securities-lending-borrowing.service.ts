import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Oauth2 } from '@services/oauth2.service';
import { KA10068Param, KA10068Response } from '@src/types';

@Injectable()
export class SecuritiesLendingBorrowingService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/slb';
	private readonly baseHeaders: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {
		this.baseHeaders = {
			'Content-Type': 'application/json;charset=UTF-8',
			'cont-yn': 'N',
			'next-key': 'N',
		};
	}

	private async executeApiCall<TParam, TResponse>(apiId: string, params: TParam): Promise<TResponse> {
		try {
			const headers = {
				...this.baseHeaders,
				'api-id': apiId,
				authorization: await this.oauth2.getBearerToken(),
			};
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, { ...params }, { headers });
			return response.data as TResponse;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10068(ka10068Param: KA10068Param): Promise<KA10068Response> {
		return this.executeApiCall<KA10068Param, KA10068Response>('ka10068', ka10068Param);
	}
}
