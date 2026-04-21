import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {Oauth2} from '@services/oauth2.service';
import {
	KT10006Param,
	KT10006Response,
	KT10007Param,
	KT10007Response,
	KT10008Param,
	KT10008Response,
	KT10009Param,
	KT10009Response
} from '@src/types';

@Injectable()
export class CreditOrderService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/crdordr';
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

	async kt10006(kt10006Param: KT10006Param): Promise<KT10006Response> {
		return this.executeApiCall<KT10006Param, KT10006Response>('kt10006', kt10006Param);
	}

	async kt10007(kt10007Param: KT10007Param): Promise<KT10007Response> {
		return this.executeApiCall<KT10007Param, KT10007Response>('kt10007', kt10007Param);
	}

	async kt10008(kt10008Param: KT10008Param): Promise<KT10008Response> {
		return this.executeApiCall<KT10008Param, KT10008Response>('kt10008', kt10008Param);
	}

	async kt10009(kt10009Param: KT10009Param): Promise<KT10009Response> {
		return this.executeApiCall<KT10009Param, KT10009Response>('kt10009', kt10009Param);
	}
}
