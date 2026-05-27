// 테마 관련 API를 처리하는 서비스
import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {Oauth2} from '@services/oauth2.service';
import {KA90001Param, KA90001Response, KA90002Param, KA90002Response} from '@src/types';

@Injectable()
export class ThemeService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/thme';
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

	async ka90001(ka90001Param: KA90001Param): Promise<KA90001Response> {
		return this.executeApiCall<KA90001Param, KA90001Response>('ka90001', ka90001Param);
	}

	async ka90002(ka90002Param: KA90002Param): Promise<KA90002Response> {
		return this.executeApiCall<KA90002Param, KA90002Response>('ka90002', ka90002Param);
	}
}
