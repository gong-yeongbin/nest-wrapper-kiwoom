import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { KA40001Params, KA40001Response, KA40002Params, KA40002Response, KA40003Params, KA40003Response, KA40004Params, ka40004ParamsDefault, KA40004Response } from '@src/types';
import { Oauth2 } from '@services/oauth2.service';

@Injectable()
export class ETFService {
	private readonly headers: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {
		this.headers = { 'Content-Type': 'application/json;charset=UTF-8', 'cont-yn': 'N', 'next-key': 'N' };
	}

	async ka40001(ka40001Params: KA40001Params): Promise<KA40001Response> {
		try {
			this.headers['api-id'] = 'ka40001';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40001Params = { ...ka40001Params };
			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/etf', params, { headers: this.headers });
			return response.data as KA40001Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40002(ka40002Params: KA40002Params) {
		try {
			this.headers['api-id'] = 'ka40002';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40002Params = { ...ka40002Params };
			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/etf', params, { headers: this.headers });
			return response.data as KA40002Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40003(ka40003Params: KA40003Params) {
		try {
			this.headers['api-id'] = 'ka40003';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40003Params = { ...ka40003Params };
			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/etf', params, { headers: this.headers });
			return response.data as KA40003Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40004(ka40004Params?: KA40004Params): Promise<KA40004Response> {
		try {
			this.headers['api-id'] = 'ka40004';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40004Params = { ...ka40004ParamsDefault, ...ka40004Params };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/etf', params, { headers: this.headers });
			return response.data as KA40004Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
