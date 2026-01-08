import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import {
	KA01690Param,
	KA10072Param,
	KA10073Param,
	KA10074Param,
	KA10075Param,
	KA10076Param,
	KA10077Param,
	KA10085Param,
	KA10088Param,
	KA10170Param,
	KT00001Param,
	KT00002Param,
	KT00003Param,
	KT00004Param,
	KT00005Param,
	KT00007Param,
	KT00008Param,
	KT00009Param,
	KT00010Param,
	KT00011Param,
	KT00012Param,
	KT00013Param,
	KT00015Param,
	KT00016Param,
	KT00017Param,
	KT00018Param,
	KT50020Param,
	KT50021Param,
	KT50030Param,
	KT50031Param,
	KT50032Param,
	KA01690Response,
	KA10072Response,
	KA10073Response,
	KA10074Response,
	KA10075Response,
	KA10076Response,
	KA10077Response,
	KA10085Response,
	KA10088Response,
	KA10170Response,
	KT00001Response,
	KT00002Response,
	KT00003Response,
	KT00004Response,
	KT00005Response,
	KT00007Response,
	KT00008Response,
	KT00009Response,
	KT00010Response,
	KT00011Response,
	KT00012Response,
	KT00013Response,
	KT00015Response,
	KT00016Response,
	KT00017Response,
	KT00018Response,
	KT50020Response,
	KT50021Response,
	KT50030Response,
	KT50031Response,
	KT50032Response,
} from '@src/types';

@Injectable()
export class AccountService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/acnt';
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

	async ka01690(ka01690Param: KA01690Param): Promise<KA01690Response> {
		return this.executeApiCall<KA01690Param, KA01690Response>('ka01690', ka01690Param);
	}

	async ka10072(ka10072Param: KA10072Param): Promise<KA10072Response> {
		return this.executeApiCall<KA10072Param, KA10072Response>('ka10072', ka10072Param);
	}

	async ka10073(ka10073Param: KA10073Param): Promise<KA10073Response> {
		return this.executeApiCall<KA10073Param, KA10073Response>('ka10073', ka10073Param);
	}

	async ka10074(ka10074Param: KA10074Param): Promise<KA10074Response> {
		return this.executeApiCall<KA10074Param, KA10074Response>('ka10074', ka10074Param);
	}

	async ka10075(ka10075Param: KA10075Param): Promise<KA10075Response> {
		return this.executeApiCall<KA10075Param, KA10075Response>('ka10075', ka10075Param);
	}

	async ka10076(ka10076Param: KA10076Param): Promise<KA10076Response> {
		return this.executeApiCall<KA10076Param, KA10076Response>('ka10076', ka10076Param);
	}

	async ka10077(ka10077Param: KA10077Param): Promise<KA10077Response> {
		return this.executeApiCall<KA10077Param, KA10077Response>('ka10077', ka10077Param);
	}

	async ka10085(ka10085Param: KA10085Param): Promise<KA10085Response> {
		return this.executeApiCall<KA10085Param, KA10085Response>('ka10085', ka10085Param);
	}

	async ka10088(ka10088Param: KA10088Param): Promise<KA10088Response> {
		return this.executeApiCall<KA10088Param, KA10088Response>('ka10088', ka10088Param);
	}

	async ka10170(ka10170Param: KA10170Param): Promise<KA10170Response> {
		return this.executeApiCall<KA10170Param, KA10170Response>('ka10170', ka10170Param);
	}

	async kt00001(kt00001Param: KT00001Param): Promise<KT00001Response> {
		return this.executeApiCall<KT00001Param, KT00001Response>('kt00001', kt00001Param);
	}

	async kt00002(kt00002Param: KT00002Param): Promise<KT00002Response> {
		return this.executeApiCall<KT00002Param, KT00002Response>('kt00002', kt00002Param);
	}

	async kt00003(kt00003Param: KT00003Param): Promise<KT00003Response> {
		return this.executeApiCall<KT00003Param, KT00003Response>('kt00003', kt00003Param);
	}

	async kt00004(kt00004Param: KT00004Param): Promise<KT00004Response> {
		return this.executeApiCall<KT00004Param, KT00004Response>('kt00004', kt00004Param);
	}

	async kt00005(kt00005Param: KT00005Param): Promise<KT00005Response> {
		return this.executeApiCall<KT00005Param, KT00005Response>('kt00005', kt00005Param);
	}

	async kt00007(kt00007Param: KT00007Param): Promise<KT00007Response> {
		return this.executeApiCall<KT00007Param, KT00007Response>('kt00007', kt00007Param);
	}

	async kt00008(kt00008Param: KT00008Param): Promise<KT00008Response> {
		return this.executeApiCall<KT00008Param, KT00008Response>('kt00008', kt00008Param);
	}

	async kt00009(kt00009Param: KT00009Param): Promise<KT00009Response> {
		return this.executeApiCall<KT00009Param, KT00009Response>('kt00009', kt00009Param);
	}

	async kt00010(kt00010Param: KT00010Param): Promise<KT00010Response> {
		return this.executeApiCall<KT00010Param, KT00010Response>('kt00010', kt00010Param);
	}

	async kt00011(kt00011Param: KT00011Param): Promise<KT00011Response> {
		return this.executeApiCall<KT00011Param, KT00011Response>('kt00011', kt00011Param);
	}

	async kt00012(kt00012Param: KT00012Param): Promise<KT00012Response> {
		return this.executeApiCall<KT00012Param, KT00012Response>('kt00012', kt00012Param);
	}

	async kt00013(kt00013Param: KT00013Param): Promise<KT00013Response> {
		return this.executeApiCall<KT00013Param, KT00013Response>('kt00013', kt00013Param);
	}

	async kt00015(kt00015Param: KT00015Param): Promise<KT00015Response> {
		return this.executeApiCall<KT00015Param, KT00015Response>('kt00015', kt00015Param);
	}

	async kt00016(kt00016Param: KT00016Param): Promise<KT00016Response> {
		return this.executeApiCall<KT00016Param, KT00016Response>('kt00016', kt00016Param);
	}

	async kt00017(kt00017Param: KT00017Param): Promise<KT00017Response> {
		return this.executeApiCall<KT00017Param, KT00017Response>('kt00017', kt00017Param);
	}

	async kt00018(kt00018Param: KT00018Param): Promise<KT00018Response> {
		return this.executeApiCall<KT00018Param, KT00018Response>('kt00018', kt00018Param);
	}

	async kt50020(kt50020Param: KT50020Param): Promise<KT50020Response> {
		return this.executeApiCall<KT50020Param, KT50020Response>('kt50020', kt50020Param);
	}

	async kt50021(kt50021Param: KT50021Param): Promise<KT50021Response> {
		return this.executeApiCall<KT50021Param, KT50021Response>('kt50021', kt50021Param);
	}

	async kt50030(kt50030Param: KT50030Param): Promise<KT50030Response> {
		return this.executeApiCall<KT50030Param, KT50030Response>('kt50030', kt50030Param);
	}

	async kt50031(kt50031Param: KT50031Param): Promise<KT50031Response> {
		return this.executeApiCall<KT50031Param, KT50031Response>('kt50031', kt50031Param);
	}

	async kt50032(kt50032Param: KT50032Param): Promise<KT50032Response> {
		return this.executeApiCall<KT50032Param, KT50032Response>('kt50032', kt50032Param);
	}
}
