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
	KA10046Param,
	KA10046Response,
	KA10047Param,
	KA10047Response,
	KA10063Param,
	KA10063Response,
	KA10066Param,
	KA10066Response,
	KA10078Param,
	KA10078Response,
	KA10086Param,
	KA10086Response,
	KA10087Param,
	KA10087Response,
	KA50010Param,
	KA50010Response,
	KA50012Param,
	KA50012Response,
	KA50087Param,
	KA50087Response,
	KA50100Param,
	KA50100Response,
	KA50101Param,
	KA50101Response,
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

	async ka10046(ka10046Param: KA10046Param): Promise<KA10046Response> {
		return this.executeApiCall<KA10046Param, KA10046Response>('ka10046', ka10046Param);
	}

	async ka10047(ka10047Param: KA10047Param): Promise<KA10047Response> {
		return this.executeApiCall<KA10047Param, KA10047Response>('ka10047', ka10047Param);
	}

	async ka10063(ka10063Param: KA10063Param): Promise<KA10063Response> {
		return this.executeApiCall<KA10063Param, KA10063Response>('ka10063', ka10063Param);
	}

	async ka10066(ka10066Param: KA10066Param): Promise<KA10066Response> {
		return this.executeApiCall<KA10066Param, KA10066Response>('ka10066', ka10066Param);
	}

	async ka10078(ka10078Param: KA10078Param): Promise<KA10078Response> {
		return this.executeApiCall<KA10078Param, KA10078Response>('ka10078', ka10078Param);
	}

	async ka10086(ka10086Param: KA10086Param): Promise<KA10086Response> {
		return this.executeApiCall<KA10086Param, KA10086Response>('ka10086', ka10086Param);
	}

	async ka10087(ka10087Param: KA10087Param): Promise<KA10087Response> {
		return this.executeApiCall<KA10087Param, KA10087Response>('ka10087', ka10087Param);
	}

	async ka50010(ka50010Param: KA50010Param): Promise<KA50010Response> {
		return this.executeApiCall<KA50010Param, KA50010Response>('ka50010', ka50010Param);
	}

	async ka50012(ka50012Param: KA50012Param): Promise<KA50012Response> {
		return this.executeApiCall<KA50012Param, KA50012Response>('ka50012', ka50012Param);
	}

	async ka50087(ka50087Param: KA50087Param): Promise<KA50087Response> {
		return this.executeApiCall<KA50087Param, KA50087Response>('ka50087', ka50087Param);
	}

	async ka50100(ka50100Param: KA50100Param): Promise<KA50100Response> {
		return this.executeApiCall<KA50100Param, KA50100Response>('ka50100', ka50100Param);
	}

	async ka50101(ka50101Param: KA50101Param): Promise<KA50101Response> {
		return this.executeApiCall<KA50101Param, KA50101Response>('ka50101', ka50101Param);
	}
}
