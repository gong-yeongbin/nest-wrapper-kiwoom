import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Oauth2 } from '@services/oauth2.service';
import { KA10008Param, KA10008Response, KA10009Param, KA10009Response, KA10131Param, KA10131Response } from '@src/types';

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

	async ka10009(ka10009Param: KA10009Param): Promise<KA10009Response> {
		return this.executeApiCall<KA10009Param, KA10009Response>('ka10009', ka10009Param);
	}

	async ka10131(ka10131Param: KA10131Param): Promise<KA10131Response> {
		return this.executeApiCall<KA10131Param, KA10131Response>('ka10131', ka10131Param);
	}
}
