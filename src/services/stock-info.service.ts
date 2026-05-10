import {HttpService} from '@nestjs/axios';
import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {Oauth2} from '@services/oauth2.service';
import {
	KA00198Param,
	KA00198Response,
	KA10001Param,
	KA10001Response,
	KA10002Param,
	KA10002Response,
	KA10003Param,
	KA10003Response,
	KA10013Param,
	KA10013Response,
	KA10015Param,
	KA10015Response,
	KA10016Param,
	KA10016Response,
	KA10017Param,
	KA10017Response,
	KA10018Param,
	KA10018Response,
	KA10019Param,
	KA10019Response,
	KA10024Param,
	KA10024Response,
	KA10025Param,
	KA10025Response,
	KA10026Param,
	KA10026Response
} from '@src/types';

@Injectable()
export class StockInfoService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/stkinfo';
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

	async ka00198(ka00198Param: KA00198Param): Promise<KA00198Response> {
		return this.executeApiCall<KA00198Param, KA00198Response>('ka00198', ka00198Param);
	}

	async ka10001(ka10001Param: KA10001Param): Promise<KA10001Response> {
		return this.executeApiCall<KA10001Param, KA10001Response>('ka10001', ka10001Param);
	}

	async ka10002(ka10002Param: KA10002Param): Promise<KA10002Response> {
		return this.executeApiCall<KA10002Param, KA10002Response>('ka10002', ka10002Param);
	}

	async ka10003(ka10003Param: KA10003Param): Promise<KA10003Response> {
		return this.executeApiCall<KA10003Param, KA10003Response>('ka10003', ka10003Param);
	}

	async ka10013(ka10013Param: KA10013Param): Promise<KA10013Response> {
		return this.executeApiCall<KA10013Param, KA10013Response>('ka10013', ka10013Param);
	}

	async ka10015(ka10015Param: KA10015Param): Promise<KA10015Response> {
		return this.executeApiCall<KA10015Param, KA10015Response>('ka10015', ka10015Param);
	}

	async ka10016(ka10016Param: KA10016Param): Promise<KA10016Response> {
		return this.executeApiCall<KA10016Param, KA10016Response>('ka10016', ka10016Param);
	}

	async ka10017(ka10017Param: KA10017Param): Promise<KA10017Response> {
		return this.executeApiCall<KA10017Param, KA10017Response>('ka10017', ka10017Param);
	}

	async ka10018(ka10018Param: KA10018Param): Promise<KA10018Response> {
		return this.executeApiCall<KA10018Param, KA10018Response>('ka10018', ka10018Param);
	}

	async ka10019(ka10019Param: KA10019Param): Promise<KA10019Response> {
		return this.executeApiCall<KA10019Param, KA10019Response>('ka10019', ka10019Param);
	}

	async ka10024(ka10024Param: KA10024Param): Promise<KA10024Response> {
		return this.executeApiCall<KA10024Param, KA10024Response>('ka10024', ka10024Param);
	}

	async ka10025(ka10025Param: KA10025Param): Promise<KA10025Response> {
		return this.executeApiCall<KA10025Param, KA10025Response>('ka10025', ka10025Param);
	}

	async ka10026(ka10026Param: KA10026Param): Promise<KA10026Response> {
		return this.executeApiCall<KA10026Param, KA10026Response>('ka10026', ka10026Param);
	}
}
