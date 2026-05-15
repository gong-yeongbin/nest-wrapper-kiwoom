// 대차거래 관련 API를 제공하는 서비스
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Oauth2 } from '@services/oauth2.service';
import { BaseApiService } from './base-api.service';
import { KA10068Param, KA10068Response, KA10069Param, KA10069Response, KA20068Param, KA20068Response, KA90012Param, KA90012Response } from '@src/types';

@Injectable()
export class SecuritiesLendingBorrowingService extends BaseApiService {
	protected readonly url = '/api/dostk/slb';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async ka10068(ka10068Param: KA10068Param): Promise<KA10068Response> {
		return this.executeApiCall<KA10068Param, KA10068Response>('ka10068', ka10068Param);
	}

	async ka10069(ka10069Param: KA10069Param): Promise<KA10069Response> {
		return this.executeApiCall<KA10069Param, KA10069Response>('ka10069', ka10069Param);
	}

	async ka20068(ka20068Param: KA20068Param): Promise<KA20068Response> {
		return this.executeApiCall<KA20068Param, KA20068Response>('ka20068', ka20068Param);
	}

	async ka90012(ka90012Param: KA90012Param): Promise<KA90012Response> {
		return this.executeApiCall<KA90012Param, KA90012Response>('ka90012', ka90012Param);
	}
}
