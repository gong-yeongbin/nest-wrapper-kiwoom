// ETF 관련 시세/정보 API를 제공하는 서비스
import { Injectable } from '@nestjs/common';
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
	KA40009Param,
	KA40009Response,
	KA40010Param,
	KA40010Response,
} from '@src/types';
import { Oauth2 } from '@services/oauth2.service';
import { BaseApiService } from './base-api.service';

@Injectable()
export class ETFService extends BaseApiService {
	protected readonly url = '/api/dostk/etf';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async ka40001(ka40001Param: KA40001Param): Promise<KA40001Response> {
		return this.executeApiCall<KA40001Param, KA40001Response>('ka40001', ka40001Param);
	}

	async ka40002(ka40002Param: KA40002Param): Promise<KA40002Response> {
		return this.executeApiCall<KA40002Param, KA40002Response>('ka40002', ka40002Param);
	}

	async ka40003(ka40003Param: KA40003Param): Promise<KA40003Response> {
		return this.executeApiCall<KA40003Param, KA40003Response>('ka40003', ka40003Param);
	}

	async ka40004(ka40004Param?: KA40004Param): Promise<KA40004Response> {
		const params = { ...ka40004ParamsDefault, ...ka40004Param };
		return this.executeApiCall<KA40004Param, KA40004Response>('ka40004', params);
	}

	async ka40006(ka40006Param: KA40006Param): Promise<KA40006Response> {
		return this.executeApiCall<KA40006Param, KA40006Response>('ka40006', ka40006Param);
	}

	async ka40007(ka40007Param: KA40007Param): Promise<KA40007Response> {
		return this.executeApiCall<KA40007Param, KA40007Response>('ka40007', ka40007Param);
	}

	async ka40008(ka40008Param: KA40008Param): Promise<KA40008Response> {
		return this.executeApiCall<KA40008Param, KA40008Response>('ka40008', ka40008Param);
	}

	async ka40009(ka40009Param: KA40009Param): Promise<KA40009Response> {
		return this.executeApiCall<KA40009Param, KA40009Response>('ka40009', ka40009Param);
	}

	async ka40010(ka40010Param: KA40010Param): Promise<KA40010Response> {
		return this.executeApiCall<KA40010Param, KA40010Response>('ka40010', ka40010Param);
	}
}
