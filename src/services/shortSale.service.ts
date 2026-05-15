// 공매도 관련 API를 제공하는 서비스
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Oauth2 } from '@services/oauth2.service';
import { BaseApiService } from './base-api.service';
import { KA10014Param, KA10014Response } from '@src/types/shortSale';

@Injectable()
export class ShortSaleService extends BaseApiService {
	protected readonly url = '/api/dostk/shsa';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async ka10014(ka10014Param: KA10014Param): Promise<KA10014Response> {
		return this.executeApiCall<KA10014Param, KA10014Response>('ka10014', ka10014Param);
	}
}
