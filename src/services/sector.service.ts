// 업종 관련 API를 제공하는 서비스
import {Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {Oauth2} from '@services/oauth2.service';
import {BaseApiService} from './base-api.service';
import {
	KA10010Param,
	KA10010Response,
	KA10051Param,
	KA10051Response,
	KA20001Param,
	KA20001Response,
	KA20002Param,
	KA20002Response,
	KA20003Param,
	KA20003Response,
	KA20009Param,
	KA20009Response,
} from '@src/types';

@Injectable()
export class SectorService extends BaseApiService {
	protected readonly url = '/api/dostk/sect';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async ka10010(ka10010Param: KA10010Param): Promise<KA10010Response> {
		return this.executeApiCall<KA10010Param, KA10010Response>('ka10010', ka10010Param);
	}

	async ka10051(ka10051Param: KA10051Param): Promise<KA10051Response> {
		return this.executeApiCall<KA10051Param, KA10051Response>('ka10051', ka10051Param);
	}

	async ka20001(ka20001Param: KA20001Param): Promise<KA20001Response> {
		return this.executeApiCall<KA20001Param, KA20001Response>('ka20001', ka20001Param);
	}

	async ka20002(ka20002Param: KA20002Param): Promise<KA20002Response> {
		return this.executeApiCall<KA20002Param, KA20002Response>('ka20002', ka20002Param);
	}

	async ka20003(ka20003Param: KA20003Param): Promise<KA20003Response> {
		return this.executeApiCall<KA20003Param, KA20003Response>('ka20003', ka20003Param);
	}

	async ka20009(ka20009Param: KA20009Param): Promise<KA20009Response> {
		return this.executeApiCall<KA20009Param, KA20009Response>('ka20009', ka20009Param);
	}
}
