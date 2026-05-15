// 외국인/기관 매매 관련 API를 제공하는 서비스
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Oauth2 } from '@services/oauth2.service';
import { BaseApiService } from './base-api.service';
import { KA10008Param, KA10008Response, KA10009Param, KA10009Response, KA10131Param, KA10131Response, KA52301Param, KA52301Response } from '@src/types';

@Injectable()
export class ForeignInstitutionalService extends BaseApiService {
	protected readonly url = '/api/dostk/frgnistt';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async ka10008(ka10008Param: KA10008Param): Promise<KA10008Response> {
		return this.executeApiCall<KA10008Param, KA10008Response>('ka10008', ka10008Param);
	}

	async ka10009(ka10009Param: KA10009Param): Promise<KA10009Response> {
		return this.executeApiCall<KA10009Param, KA10009Response>('ka10009', ka10009Param);
	}

	async ka10131(ka10131Param: KA10131Param): Promise<KA10131Response> {
		return this.executeApiCall<KA10131Param, KA10131Response>('ka10131', ka10131Param);
	}

	async ka52301(ka52301Param: KA52301Param): Promise<KA52301Response> {
		return this.executeApiCall<KA52301Param, KA52301Response>('ka52301', ka52301Param);
	}
}
