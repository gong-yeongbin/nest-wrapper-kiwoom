import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import { KA01690Param, KA01690Response, KA10072Param, KA10072Response } from '@src/types';

@Injectable()
export class AccountService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/acnt';
	private readonly headers: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {
		this.headers = { 'Content-Type': 'application/json;charset=UTF-8', 'cont-yn': 'N', 'next-key': 'N' };
	}

	async ka01690(ka01690Param: KA01690Param) {
		try {
			this.headers['api-id'] = 'ka01690';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA01690Param = { ...ka01690Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA01690Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10072(ka10072Param: KA10072Param) {
		try {
			this.headers['api-id'] = 'ka10072';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10072Param = { ...ka10072Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10072Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
