// 신용 주문 관련 API를 제공하는 서비스
import {Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {Oauth2} from '@services/oauth2.service';
import {BaseApiService} from './base-api.service';
import {
	KT10006Param,
	KT10006Response,
	KT10007Param,
	KT10007Response,
	KT10008Param,
	KT10008Response,
	KT10009Param,
	KT10009Response
} from '@src/types';

@Injectable()
export class CreditOrderService extends BaseApiService {
	protected readonly url = '/api/dostk/crdordr';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async kt10006(kt10006Param: KT10006Param): Promise<KT10006Response> {
		return this.executeApiCall<KT10006Param, KT10006Response>('kt10006', kt10006Param);
	}

	async kt10007(kt10007Param: KT10007Param): Promise<KT10007Response> {
		return this.executeApiCall<KT10007Param, KT10007Response>('kt10007', kt10007Param);
	}

	async kt10008(kt10008Param: KT10008Param): Promise<KT10008Response> {
		return this.executeApiCall<KT10008Param, KT10008Response>('kt10008', kt10008Param);
	}

	async kt10009(kt10009Param: KT10009Param): Promise<KT10009Response> {
		return this.executeApiCall<KT10009Param, KT10009Response>('kt10009', kt10009Param);
	}
}
