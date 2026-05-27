// ELW 관련 API를 처리하는 서비스
import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { KA10048Param, KA10048Response, KA10050Param, KA10050Response, KA30001Param, KA30001Response } from '@src/types';
import { Oauth2 } from '@services/oauth2.service';

@Injectable()
export class ElwService implements OnModuleInit {
	private readonly domain = 'https://api.kiwoom.com';
	private readonly url = '/api/dostk/elw';
	private readonly baseHeaders: Record<string, string> = {
		'Content-Type': 'application/json;charset=UTF-8',
		'cont-yn': 'N',
		'next-key': 'N',
	};

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {}

	async onModuleInit() {
		this.baseHeaders['authorization'] = await this.oauth2.getBearerToken();
	}

	private async executeApiCall<TParam, TResponse>(apiId: string, params: TParam): Promise<TResponse> {
		try {
			const response = await this.httpService.axiosRef.post<TResponse>(`${this.domain}${this.url}`, params, {
				headers: { ...this.baseHeaders, 'api-id': apiId },
			});
			return response.data;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10048(params: KA10048Param): Promise<KA10048Response> {
		return this.executeApiCall<KA10048Param, KA10048Response>('ka10048', params);
	}

	async ka10050(params: KA10050Param): Promise<KA10050Response> {
		return this.executeApiCall<KA10050Param, KA10050Response>('ka10050', params);
	}

	async ka30001(params: KA30001Param): Promise<KA30001Response> {
		return this.executeApiCall<KA30001Param, KA30001Response>('ka30001', params);
	}
}
