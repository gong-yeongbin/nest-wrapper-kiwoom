import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from './oauth2.service';
import { KA40004Params, ka40004ParamsDefault, KA40004Response } from '../types';

@Injectable()
export class ETFService {
	private readonly headers: Record<string, string>;
	private readonly body: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {
		this.headers = { 'Content-Type': 'application/json;charset=UTF-8', 'cont-yn': 'N', 'next-key': 'N' };
	}

	async ka40004(ka40004Params: KA40004Params): Promise<KA40004Response> {
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
