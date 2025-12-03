import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import {
	KA01690Param,
	KA01690Response,
	KA10072Param,
	KA10072Response,
	KA10073Param,
	KA10073Response,
	KA10074Param,
	KA10074Response,
	KA10075Param,
	KA10075Response,
	KA10076Param,
	KA10076Response,
	KA10077Param,
	KA10077Response,
	KA10085Param,
	KA10085Response,
	KA10088Param,
	KA10088Response,
} from '@src/types';

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

	async ka10073(ka10073Param: KA10073Param) {
		try {
			this.headers['api-id'] = 'ka10073';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10073Param = { ...ka10073Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10073Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10074(ka10074Param: KA10074Param) {
		try {
			this.headers['api-id'] = 'ka10074';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10074Param = { ...ka10074Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10074Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10075(ka10075Param: KA10075Param) {
		try {
			this.headers['api-id'] = 'ka10075';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10075Param = { ...ka10075Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10075Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10076(ka10076Param: KA10076Param) {
		try {
			this.headers['api-id'] = 'ka10076';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10076Param = { ...ka10076Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10076Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10077(ka10077Param: KA10077Param) {
		try {
			this.headers['api-id'] = 'ka10077';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10077Param = { ...ka10077Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10077Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10085(ka10085Param: KA10085Param) {
		try {
			this.headers['api-id'] = 'ka10085';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10085Param = { ...ka10085Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10085Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10088(ka10088Param: KA10088Param) {
		try {
			this.headers['api-id'] = 'ka10088';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10088Param = { ...ka10088Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10088Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
