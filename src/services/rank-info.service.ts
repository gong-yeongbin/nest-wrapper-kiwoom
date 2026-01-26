import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import { KA10020Param, KA10020Response, KA10021Param, KA10021Response } from '@src/types';

@Injectable()
export class RankInfoService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/rkinfo';
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

	async ka10020(ka10020Param: KA10020Param): Promise<KA10020Response> {
		return this.executeApiCall<KA10020Param, KA10020Response>('ka10020', ka10020Param);
	}

	async ka10021(ka10021Param: KA10021Param): Promise<KA10021Response> {
		return this.executeApiCall<KA10021Param, KA10021Response>('ka10021', ka10021Param);
	}
}
