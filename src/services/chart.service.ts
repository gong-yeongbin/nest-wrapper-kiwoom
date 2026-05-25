// 차트 관련 키움 REST API를 호출하는 서비스
import {HttpService} from '@nestjs/axios';
import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {Oauth2} from '@services/oauth2.service';
import {KA10060Param, KA10060Response, KA10064Param, KA10064Response, KA10079Param, KA10079Response, KA10080Param, KA10080Response, KA10081Param, KA10081Response, KA10082Param, KA10082Response, KA10083Param, KA10083Response, KA10094Param, KA10094Response, KA20004Param, KA20004Response, KA20005Param, KA20005Response, KA20006Param, KA20006Response, KA20007Param, KA20007Response, KA20008Param, KA20008Response, KA20019Param, KA20019Response, KA50079Param, KA50079Response} from '@src/types';

@Injectable()
export class ChartService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/chart';
	private readonly baseHeaders: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {
		this.baseHeaders = {
			'Content-Type': 'application/json;charset=UTF-8',
			'cont-yn': 'N',
			'next-key': 'N',
		};
	}

	private async executeApiCall<TParam, TResponse>(apiId: string, params: TParam): Promise<TResponse> {
		try {
			const headers = {
				...this.baseHeaders,
				'api-id': apiId,
				authorization: await this.oauth2.getBearerToken(),
			};
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, { ...params }, { headers });
			return response.data as TResponse;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10060(ka10060Param: KA10060Param): Promise<KA10060Response> {
		return this.executeApiCall<KA10060Param, KA10060Response>('ka10060', ka10060Param);
	}

	async ka10064(ka10064Param: KA10064Param): Promise<KA10064Response> {
		return this.executeApiCall<KA10064Param, KA10064Response>('ka10064', ka10064Param);
	}

	async ka10079(ka10079Param: KA10079Param): Promise<KA10079Response> {
		return this.executeApiCall<KA10079Param, KA10079Response>('ka10079', ka10079Param);
	}

	async ka10080(ka10080Param: KA10080Param): Promise<KA10080Response> {
		return this.executeApiCall<KA10080Param, KA10080Response>('ka10080', ka10080Param);
	}

	async ka10081(ka10081Param: KA10081Param): Promise<KA10081Response> {
		return this.executeApiCall<KA10081Param, KA10081Response>('ka10081', ka10081Param);
	}

	async ka10082(ka10082Param: KA10082Param): Promise<KA10082Response> {
		return this.executeApiCall<KA10082Param, KA10082Response>('ka10082', ka10082Param);
	}

	async ka10083(ka10083Param: KA10083Param): Promise<KA10083Response> {
		return this.executeApiCall<KA10083Param, KA10083Response>('ka10083', ka10083Param);
	}

	async ka10094(ka10094Param: KA10094Param): Promise<KA10094Response> {
		return this.executeApiCall<KA10094Param, KA10094Response>('ka10094', ka10094Param);
	}

	async ka20004(ka20004Param: KA20004Param): Promise<KA20004Response> {
		return this.executeApiCall<KA20004Param, KA20004Response>('ka20004', ka20004Param);
	}

	async ka20005(ka20005Param: KA20005Param): Promise<KA20005Response> {
		return this.executeApiCall<KA20005Param, KA20005Response>('ka20005', ka20005Param);
	}

	async ka20006(ka20006Param: KA20006Param): Promise<KA20006Response> {
		return this.executeApiCall<KA20006Param, KA20006Response>('ka20006', ka20006Param);
	}

	async ka20007(ka20007Param: KA20007Param): Promise<KA20007Response> {
		return this.executeApiCall<KA20007Param, KA20007Response>('ka20007', ka20007Param);
	}

	async ka20008(ka20008Param: KA20008Param): Promise<KA20008Response> {
		return this.executeApiCall<KA20008Param, KA20008Response>('ka20008', ka20008Param);
	}

	async ka20019(ka20019Param: KA20019Param): Promise<KA20019Response> {
		return this.executeApiCall<KA20019Param, KA20019Response>('ka20019', ka20019Param);
	}

	async ka50079(ka50079Param: KA50079Param): Promise<KA50079Response> {
		return this.executeApiCall<KA50079Param, KA50079Response>('ka50079', ka50079Param);
	}
}
