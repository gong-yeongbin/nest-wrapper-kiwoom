import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import { KT10000Param, KT10000Response, KT10001Param, KT10001Response, KT10002Param, KT10002Response, KT10003Param, KT10003Response, KT50000Param, KT50000Response, KT50001Param, KT50001Response, KT50002Param, KT50002Response, KT50003Param, KT50003Response } from '@src/types';

@Injectable()
export class OrderService implements OnModuleInit {
	private readonly headers: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {}

	async onModuleInit() {
		this.headers['authorization'] = await this.oauth2.getBearerToken();
	}

	async kt10000(kt10000Param: KT10000Param): Promise<KT10000Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt10000' };
			const params = { ...kt10000Param };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/etf', params, { headers });
			return response.data as KT10000Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt10001(kt10001Param: KT10001Param): Promise<KT10001Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt10001' };
			const params = { ...kt10001Param };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/ordr', params, { headers });
			return response.data as KT10001Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt10002(kt10002Param: KT10002Param): Promise<KT10002Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt10002' };
			const params = { ...kt10002Param };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/ordr', params, { headers });
			return response.data as KT10002Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt10003(kt10003Param: KT10003Param): Promise<KT10003Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt10003' };
			const params = { ...kt10003Param };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/ordr', params, { headers });
			return response.data as KT10003Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt50000(kt50000Param: KT50000Param): Promise<KT50000Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt50000' };
			const params = { ...kt50000Param };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/ordr', params, { headers });
			return response.data as KT50000Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt50001(kt50001Param: KT50001Param): Promise<KT50001Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt50001' };
			const params = { ...kt50001Param };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/ordr', params, { headers });
			return response.data as KT50001Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt50002(kt50002Param: KT50002Param): Promise<KT50002Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt50002' };
			const params = { ...kt50002Param };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/ordr', params, { headers });
			return response.data as KT50002Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt50003(kt50003Param: KT50003Param): Promise<KT50003Response> {
		try {
			const headers = { ...this.headers, 'api-id': 'kt50003' };
			const params = { ...kt50003Param };

			const response = await this.httpService.axiosRef.post('https://api.kiwoom.com/api/dostk/ordr', params, { headers });
			return response.data as KT50003Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
