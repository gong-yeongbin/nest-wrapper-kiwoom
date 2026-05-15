// 키움 REST API 공통 호출 로직을 제공하는 추상 기반 서비스
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';

@Injectable()
export abstract class BaseApiService {
	private static readonly DOMAIN = 'https://api.kiwoom.com';
	protected abstract readonly url: string;

	private readonly baseHeaders: Record<string, string> = {
		'Content-Type': 'application/json;charset=UTF-8',
		'cont-yn': 'N',
		'next-key': 'N',
	};

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2,
	) {}

	protected async executeApiCall<TParam, TResponse>(apiId: string, params: TParam): Promise<TResponse> {
		try {
			const headers = {
				...this.baseHeaders,
				'api-id': apiId,
				authorization: await this.oauth2.getBearerToken(),
			};
			const response = await this.httpService.axiosRef.post(`${BaseApiService.DOMAIN}${this.url}`, { ...params }, { headers });
			return response.data as TResponse;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
