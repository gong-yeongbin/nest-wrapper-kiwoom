import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Oauth2 } from '@services/oauth2.service';
import { KA10008Param, KA10008Response } from '@src/types/foreign-institutional';

@Injectable()
export class ForeignInstitutionalService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/frgnistt';
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

	async ka10008(ka10008Param: KA10008Param): Promise<KA10008Response> {
		return this.executeApiCall<KA10008Param, KA10008Response>('ka10008', ka10008Param);
	}
}
