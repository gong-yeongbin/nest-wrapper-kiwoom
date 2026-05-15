// 차트 관련 키움 REST API를 호출하는 서비스
import {HttpService} from '@nestjs/axios';
import {Injectable} from '@nestjs/common';
import {Oauth2} from '@services/oauth2.service';
import {BaseApiService} from './base-api.service';
import {KA10060Param, KA10060Response} from '@src/types';

@Injectable()
export class ChartService extends BaseApiService {
	protected readonly url = '/api/dostk/chart';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async ka10060(ka10060Param: KA10060Param): Promise<KA10060Response> {
		return this.executeApiCall<KA10060Param, KA10060Response>('ka10060', ka10060Param);
	}
}
