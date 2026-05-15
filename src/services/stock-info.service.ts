// 종목 정보 관련 API를 제공하는 서비스
import {HttpService} from '@nestjs/axios';
import {Injectable} from '@nestjs/common';
import {Oauth2} from '@services/oauth2.service';
import {BaseApiService} from './base-api.service';
import {
	KA00198Param,
	KA00198Response,
	KA10001Param,
	KA10001Response,
	KA10002Param,
	KA10002Response,
	KA10003Param,
	KA10003Response,
	KA10013Param,
	KA10013Response,
	KA10015Param,
	KA10015Response,
	KA10016Param,
	KA10016Response,
	KA10017Param,
	KA10017Response,
	KA10018Param,
	KA10018Response,
	KA10019Param,
	KA10019Response,
	KA10024Param,
	KA10024Response,
	KA10025Param,
	KA10025Response,
	KA10026Param,
	KA10026Response,
	KA10028Param,
	KA10028Response,
	KA10043Param,
	KA10043Response,
	KA10052Param,
	KA10052Response,
	KA10054Param,
	KA10054Response,
	KA10055Param,
	KA10055Response,
	KA10058Param,
	KA10058Response
} from '@src/types';

@Injectable()
export class StockInfoService extends BaseApiService {
	protected readonly url = '/api/dostk/stkinfo';

	constructor(httpService: HttpService, oauth2: Oauth2) {
		super(httpService, oauth2);
	}

	async ka00198(ka00198Param: KA00198Param): Promise<KA00198Response> {
		return this.executeApiCall<KA00198Param, KA00198Response>('ka00198', ka00198Param);
	}

	async ka10001(ka10001Param: KA10001Param): Promise<KA10001Response> {
		return this.executeApiCall<KA10001Param, KA10001Response>('ka10001', ka10001Param);
	}

	async ka10002(ka10002Param: KA10002Param): Promise<KA10002Response> {
		return this.executeApiCall<KA10002Param, KA10002Response>('ka10002', ka10002Param);
	}

	async ka10003(ka10003Param: KA10003Param): Promise<KA10003Response> {
		return this.executeApiCall<KA10003Param, KA10003Response>('ka10003', ka10003Param);
	}

	async ka10013(ka10013Param: KA10013Param): Promise<KA10013Response> {
		return this.executeApiCall<KA10013Param, KA10013Response>('ka10013', ka10013Param);
	}

	async ka10015(ka10015Param: KA10015Param): Promise<KA10015Response> {
		return this.executeApiCall<KA10015Param, KA10015Response>('ka10015', ka10015Param);
	}

	async ka10016(ka10016Param: KA10016Param): Promise<KA10016Response> {
		return this.executeApiCall<KA10016Param, KA10016Response>('ka10016', ka10016Param);
	}

	async ka10017(ka10017Param: KA10017Param): Promise<KA10017Response> {
		return this.executeApiCall<KA10017Param, KA10017Response>('ka10017', ka10017Param);
	}

	async ka10018(ka10018Param: KA10018Param): Promise<KA10018Response> {
		return this.executeApiCall<KA10018Param, KA10018Response>('ka10018', ka10018Param);
	}

	async ka10019(ka10019Param: KA10019Param): Promise<KA10019Response> {
		return this.executeApiCall<KA10019Param, KA10019Response>('ka10019', ka10019Param);
	}

	async ka10024(ka10024Param: KA10024Param): Promise<KA10024Response> {
		return this.executeApiCall<KA10024Param, KA10024Response>('ka10024', ka10024Param);
	}

	async ka10025(ka10025Param: KA10025Param): Promise<KA10025Response> {
		return this.executeApiCall<KA10025Param, KA10025Response>('ka10025', ka10025Param);
	}

	async ka10026(ka10026Param: KA10026Param): Promise<KA10026Response> {
		return this.executeApiCall<KA10026Param, KA10026Response>('ka10026', ka10026Param);
	}

	async ka10028(ka10028Param: KA10028Param): Promise<KA10028Response> {
		return this.executeApiCall<KA10028Param, KA10028Response>('ka10028', ka10028Param);
	}

	async ka10043(ka10043Param: KA10043Param): Promise<KA10043Response> {
		return this.executeApiCall<KA10043Param, KA10043Response>('ka10043', ka10043Param);
	}

	async ka10052(ka10052Param: KA10052Param): Promise<KA10052Response> {
		return this.executeApiCall<KA10052Param, KA10052Response>('ka10052', ka10052Param);
	}

	async ka10054(ka10054Param: KA10054Param): Promise<KA10054Response> {
		return this.executeApiCall<KA10054Param, KA10054Response>('ka10054', ka10054Param);
	}

	async ka10055(ka10055Param: KA10055Param): Promise<KA10055Response> {
		return this.executeApiCall<KA10055Param, KA10055Response>('ka10055', ka10055Param);
	}

	async ka10058(ka10058Param: KA10058Param): Promise<KA10058Response> {
		return this.executeApiCall<KA10058Param, KA10058Response>('ka10058', ka10058Param);
	}
}
