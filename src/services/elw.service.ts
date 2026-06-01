// ELW 관련 API를 처리하는 서비스
import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { KA10048Param, KA10048Response, KA10050Param, KA10050Response, KA30001Param, KA30001Response, KA30002Param, KA30002Response, KA30003Param, KA30003Response, KA30004Param, KA30004Response, KA30005Param, KA30005Response, KA30009Param, KA30009Response, KA30010Param, KA30010Response, KA30011Param, KA30011Response, KA30012Param, KA30012Response } from '@src/types';
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

	async ka30002(params: KA30002Param): Promise<KA30002Response> {
		return this.executeApiCall<KA30002Param, KA30002Response>('ka30002', params);
	}

	async ka30003(params: KA30003Param): Promise<KA30003Response> {
		return this.executeApiCall<KA30003Param, KA30003Response>('ka30003', params);
	}

	async ka30004(params: KA30004Param): Promise<KA30004Response> {
		return this.executeApiCall<KA30004Param, KA30004Response>('ka30004', params);
	}

	async ka30005(params: KA30005Param): Promise<KA30005Response> {
		return this.executeApiCall<KA30005Param, KA30005Response>('ka30005', params);
	}

	async ka30009(params: KA30009Param): Promise<KA30009Response> {
		return this.executeApiCall<KA30009Param, KA30009Response>('ka30009', params);
	}

	async ka30010(params: KA30010Param): Promise<KA30010Response> {
		return this.executeApiCall<KA30010Param, KA30010Response>('ka30010', params);
	}

	async ka30011(params: KA30011Param): Promise<KA30011Response> {
		return this.executeApiCall<KA30011Param, KA30011Response>('ka30011', params);
	}

	async ka30012(params: KA30012Param): Promise<KA30012Response> {
		return this.executeApiCall<KA30012Param, KA30012Response>('ka30012', params);
	}
}
