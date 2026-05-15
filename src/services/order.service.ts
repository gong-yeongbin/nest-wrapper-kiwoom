// 주식 매수/매도/정정/취소 주문 API를 제공하는 서비스
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import { BaseApiService } from './base-api.service';
import { KT10000Param, KT10000Response } from '@src/types';

@Injectable()
export class OrderService extends BaseApiService {
	protected readonly url = '/api/dostk/ordr';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async kt10000(kt10000Param: KT10000Param): Promise<KT10000Response> {
		return this.executeApiCall<KT10000Param, KT10000Response>('kt10000', kt10000Param);
	}
}
