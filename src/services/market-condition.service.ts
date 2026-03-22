import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {Oauth2} from '@services/oauth2.service';
import {
	KA10004Param,
	KA10004Response,
	KA10005Param,
	KA10005Response,
	KA10006Param,
	KA10006Response,
	KA10007Param,
	KA10007Response,
	KA10011Param,
	KA10011Response,
	KA10044Param,
	KA10044Response,
	KA10045Param,
	KA10045Response,
} from '@src/types';

@Injectable()
export class MarketConditionService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/mrkcond';
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

	async ka10004(ka10004Param: KA10004Param): Promise<KA10004Response> {
		return this.executeApiCall<KA10004Param, KA10004Response>('ka10004', ka10004Param);
	}

	async ka10005(ka10005Param: KA10005Param): Promise<KA10005Response> {
		return this.executeApiCall<KA10005Param, KA10005Response>('ka10005', ka10005Param);
	}

	async ka10006(ka10006Param: KA10006Param): Promise<KA10006Response> {
		return this.executeApiCall<KA10006Param, KA10006Response>('ka10006', ka10006Param);
	}

	async ka10007(ka10007Param: KA10007Param): Promise<KA10007Response> {
		return this.executeApiCall<KA10007Param, KA10007Response>('ka10007', ka10007Param);
	}

	async ka10011(ka10011Param: KA10011Param): Promise<KA10011Response> {
		return this.executeApiCall<KA10011Param, KA10011Response>('ka10011', ka10011Param);
	}

	async ka10044(ka10044Param: KA10044Param): Promise<KA10044Response> {
		return this.executeApiCall<KA10044Param, KA10044Response>('ka10044', ka10044Param);
	}

	async ka10045(ka10045Param: KA10045Param): Promise<KA10045Response> {
		return this.executeApiCall<KA10045Param, KA10045Response>('ka10045', ka10045Param);
	}
}
