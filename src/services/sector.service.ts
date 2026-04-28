import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {Oauth2} from '@services/oauth2.service';
import {
	KA10010Param,
	KA10010Response,
	KA10051Param,
	KA10051Response,
	KA20001Param,
	KA20001Response,
	KA20002Param,
	KA20002Response,
	KA20003Param,
	KA20003Response,
	KA20009Param,
	KA20009Response,
} from '@src/types';

@Injectable()
export class SectorService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/sect';
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

	async ka10010(ka10010Param: KA10010Param): Promise<KA10010Response> {
		return this.executeApiCall<KA10010Param, KA10010Response>('ka10010', ka10010Param);
	}

	async ka10051(ka10051Param: KA10051Param): Promise<KA10051Response> {
		return this.executeApiCall<KA10051Param, KA10051Response>('ka10051', ka10051Param);
	}

	async ka20001(ka20001Param: KA20001Param): Promise<KA20001Response> {
		return this.executeApiCall<KA20001Param, KA20001Response>('ka20001', ka20001Param);
	}

	async ka20002(ka20002Param: KA20002Param): Promise<KA20002Response> {
		return this.executeApiCall<KA20002Param, KA20002Response>('ka20002', ka20002Param);
	}

	async ka20003(ka20003Param: KA20003Param): Promise<KA20003Response> {
		return this.executeApiCall<KA20003Param, KA20003Response>('ka20003', ka20003Param);
	}

	async ka20009(ka20009Param: KA20009Param): Promise<KA20009Response> {
		return this.executeApiCall<KA20009Param, KA20009Response>('ka20009', ka20009Param);
	}
}
