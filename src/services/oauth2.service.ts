import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { KIWOOM_MODULE_OPTIONS } from '../kiwoom.constants';
import { KiwoomOptions } from '../interfaces';
import { HttpService } from '@nestjs/axios';
import * as dayjs from 'dayjs';
import { AU10001Response, AU10002Response } from '../types';

@Injectable()
export class Oauth2 {
	private readonly headers: Record<string, string>;
	private readonly body: Record<string, string>;
	private readonly auth: Record<string, string>;

	constructor(
		@Inject(KIWOOM_MODULE_OPTIONS) private readonly option: KiwoomOptions,
		private readonly httpService: HttpService
	) {
		this.auth = { expires_dt: '0' };
		this.headers = { 'Content-Type': 'application/json;charset=UTF-8' };
		this.body = { appkey: this.option.appKey, secretkey: this.option.secretKey };
	}

	async getBearerToken(): Promise<string> {
		const expiresDt: string = this.auth.expires_dt;
		const nowDt: string = dayjs().format('YYYYMMDDHHmmss');

		if (parseInt(expiresDt) > parseInt(nowDt)) {
			return this.auth.bearer_token;
		} else {
			const response = await this.au10001();
			const expiresDt = response.expires_dt;
			const bearerToken = `${response.token_type} ${response.token}`;
			this.auth.expires_dt = expiresDt;
			this.auth.bearer_token = bearerToken;
			return bearerToken;
		}
	}
	async au10001(): Promise<AU10001Response> {
		try {
			this.body.grant_type = 'client_credentials';

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/oauth2/token', this.body, { headers: this.headers });
			return response.data as AU10001Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async au10002(token: string): Promise<AU10002Response> {
		try {
			this.body.token = token;

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/oauth2/revoke', this.body, { headers: this.headers });
			return response.data as AU10002Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
