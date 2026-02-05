import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import {
	KA10020Param,
	KA10020Response,
	KA10021Param,
	KA10021Response,
	KA10022Param,
	KA10022Response,
	KA10023Param,
	KA10023Response,
	KA10027Param,
	KA10027Response,
	KA10029Param,
	KA10029Response,
	KA10030Param,
	KA10030Response,
	KA10031Param,
	KA10031Response,
} from '@src/types';

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

	async ka10022(ka10022Param: KA10022Param): Promise<KA10022Response> {
		return this.executeApiCall<KA10022Param, KA10022Response>('ka10022', ka10022Param);
	}

	async ka10023(ka10023Param: KA10023Param): Promise<KA10023Response> {
		return this.executeApiCall<KA10023Param, KA10023Response>('ka10023', ka10023Param);
	}

	async ka10027(ka10027Param: KA10027Param): Promise<KA10027Response> {
		return this.executeApiCall<KA10027Param, KA10027Response>('ka10027', ka10027Param);
	}

	async ka10029(ka10029Param: KA10029Param): Promise<KA10029Response> {
		return this.executeApiCall<KA10029Param, KA10029Response>('ka10029', ka10029Param);
	}

	async ka10030(ka10030Param: KA10030Param): Promise<KA10030Response> {
		return this.executeApiCall<KA10030Param, KA10030Response>('ka10030', ka10030Param);
	}

	async ka10031(ka10031Param: KA10031Param): Promise<KA10031Response> {
		return this.executeApiCall<KA10031Param, KA10031Response>('ka10031', ka10031Param);
	}
}
