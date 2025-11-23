import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
	KA40001Param,
	KA40001Response,
	KA40002Param,
	KA40002Response,
	KA40003Param,
	KA40003Response,
	KA40004Param,
	ka40004ParamsDefault,
	KA40004Response,
	KA40006Param,
	KA40006Response,
	KA40007Param,
	KA40007Response,
	KA40008Param,
	KA40008Response,
} from '@src/types';
import { Oauth2 } from '@services/oauth2.service';

@Injectable()
export class ETFService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/etf';
	private readonly headers: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {
		this.headers = { 'Content-Type': 'application/json;charset=UTF-8', 'cont-yn': 'N', 'next-key': 'N' };
	}

	async ka40001(ka40001Param: KA40001Param): Promise<KA40001Response> {
		try {
			this.headers['api-id'] = 'ka40001';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40001Param = { ...ka40001Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA40001Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40002(ka40002Param: KA40002Param) {
		try {
			this.headers['api-id'] = 'ka40002';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40002Param = { ...ka40002Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA40002Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40003(ka40003Param: KA40003Param) {
		try {
			this.headers['api-id'] = 'ka40003';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40003Param = { ...ka40003Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA40003Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40004(ka40004Param?: KA40004Param): Promise<KA40004Response> {
		try {
			this.headers['api-id'] = 'ka40004';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40004Param = { ...ka40004ParamsDefault, ...ka40004Param };

			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA40004Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40006(ka40006Param: KA40006Param): Promise<KA40006Response> {
		try {
			this.headers['api-id'] = 'ka40006';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40006Param = { ...ka40006Param };

			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA40006Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40007(ka40007Param: KA40007Param): Promise<KA40007Response> {
		try {
			this.headers['api-id'] = 'ka40007';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40007Param = { ...ka40007Param };

			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA40007Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka40008(ka40008Param: KA40008Param): Promise<KA40008Response> {
		try {
			this.headers['api-id'] = 'ka40008';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA40008Param = { ...ka40008Param };

			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA40008Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
