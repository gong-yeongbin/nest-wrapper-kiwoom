import {Inject, Injectable, InternalServerErrorException} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {KIWOOM_MODULE_OPTIONS} from '@src/kiwoom.constants';
import {KiwoomOptions} from '@src/interfaces';
import {AU10001Response, AU10002Response} from '@src/types';
import dayjs from 'dayjs';

@Injectable()
export class Oauth2 {
	private readonly headers: Record<string, string>;
	private readonly body: Record<string, string>;
	private expiresDt = '0';
	private bearerToken = '';
	private refreshPromise: Promise<string> | null = null;

	constructor(
		@Inject(KIWOOM_MODULE_OPTIONS) private readonly option: KiwoomOptions,
		private readonly httpService: HttpService
	) {
		this.headers = { 'Content-Type': 'application/json;charset=UTF-8' };
		this.body = { appkey: this.option.appKey, secretkey: this.option.secretKey };
	}

	async getBearerToken(): Promise<string> {
		const nowDt = dayjs().format('YYYYMMDDHHmmss');

		if (parseInt(this.expiresDt) > parseInt(nowDt)) {
			return this.bearerToken;
		}

		if (!this.refreshPromise) {
			this.refreshPromise = this.au10001().then((response) => {
				this.expiresDt = response.expires_dt;
				this.bearerToken = `${response.token_type} ${response.token}`;
				this.refreshPromise = null;
				return this.bearerToken;
			});
		}

		return this.refreshPromise;
	}

	async au10001(): Promise<AU10001Response> {
		try {
			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/oauth2/token', { ...this.body, grant_type: 'client_credentials' }, { headers: this.headers });
			return response.data as AU10001Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async au10002(token: string): Promise<AU10002Response> {
		try {
			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/oauth2/revoke', { ...this.body, token }, { headers: this.headers });
			return response.data as AU10002Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
