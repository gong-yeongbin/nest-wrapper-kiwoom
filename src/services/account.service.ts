import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import {
	KA01690Param,
	KA01690Response,
	KA10072Param,
	KA10072Response,
	KA10073Param,
	KA10073Response,
	KA10074Param,
	KA10074Response,
	KA10075Param,
	KA10075Response,
	KA10076Param,
	KA10076Response,
	KA10077Param,
	KA10077Response,
	KA10085Param,
	KA10085Response,
	KA10088Param,
	KA10088Response,
	KA10170Param,
	KA10170Response,
	KT00001Param,
	KT00001Response,
	KT00002Param,
	KT00002Response,
	KT00003Param,
	KT00003Response,
	KT00004Param,
	KT00004Response,
	KT00005Param,
	KT00005Response,
	KT00007Param,
	KT00007Response,
	KT00008Param,
	KT00008Response,
	KT00009Param,
	KT00009Response,
	KT00010Param,
	KT00010Response,
	KT00011Param,
	KT00011Response,
	KT00012Param,
	KT00012Response,
	KT00013Param,
	KT00013Response,
	KT00015Param,
	KT00015Response,
	KT00016Param,
	KT00016Response,
	KT00017Param,
	KT00017Response,
	KT00018Param,
	KT00018Response,
} from '@src/types';

@Injectable()
export class AccountService {
	private readonly domain: string = 'https://api.kiwoom.com';
	private readonly url: string = '/api/dostk/acnt';
	private readonly headers: Record<string, string>;

	constructor(
		private readonly httpService: HttpService,
		private readonly oauth2: Oauth2
	) {
		this.headers = { 'Content-Type': 'application/json;charset=UTF-8', 'cont-yn': 'N', 'next-key': 'N' };
	}

	async ka01690(ka01690Param: KA01690Param) {
		try {
			this.headers['api-id'] = 'ka01690';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA01690Param = { ...ka01690Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA01690Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10072(ka10072Param: KA10072Param) {
		try {
			this.headers['api-id'] = 'ka10072';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10072Param = { ...ka10072Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10072Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10073(ka10073Param: KA10073Param) {
		try {
			this.headers['api-id'] = 'ka10073';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10073Param = { ...ka10073Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10073Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10074(ka10074Param: KA10074Param) {
		try {
			this.headers['api-id'] = 'ka10074';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10074Param = { ...ka10074Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10074Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10075(ka10075Param: KA10075Param) {
		try {
			this.headers['api-id'] = 'ka10075';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10075Param = { ...ka10075Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10075Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10076(ka10076Param: KA10076Param) {
		try {
			this.headers['api-id'] = 'ka10076';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10076Param = { ...ka10076Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10076Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10077(ka10077Param: KA10077Param) {
		try {
			this.headers['api-id'] = 'ka10077';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10077Param = { ...ka10077Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10077Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10085(ka10085Param: KA10085Param) {
		try {
			this.headers['api-id'] = 'ka10085';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10085Param = { ...ka10085Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10085Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10088(ka10088Param: KA10088Param) {
		try {
			this.headers['api-id'] = 'ka10088';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10088Param = { ...ka10088Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10088Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async ka10170(ka10170Param: KA10170Param) {
		try {
			this.headers['api-id'] = 'ka10170';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KA10170Param = { ...ka10170Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KA10170Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00001(kt00001Param: KT00001Param) {
		try {
			this.headers['api-id'] = 'kt00001';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00001Param = { ...kt00001Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00001Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00002(kt00002Param: KT00002Param) {
		try {
			this.headers['api-id'] = 'kt00002';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00002Param = { ...kt00002Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00002Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00003(kt00003Param: KT00003Param) {
		try {
			this.headers['api-id'] = 'kt00003';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00003Param = { ...kt00003Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00003Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00004(kt00004Param: KT00004Param) {
		try {
			this.headers['api-id'] = 'kt00004';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00004Param = { ...kt00004Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00004Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00005(kt00005Param: KT00005Param) {
		try {
			this.headers['api-id'] = 'kt00005';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00005Param = { ...kt00005Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00005Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00007(kt00007Param: KT00007Param) {
		try {
			this.headers['api-id'] = 'kt00007';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00007Param = { ...kt00007Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00007Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00008(kt00008Param: KT00008Param) {
		try {
			this.headers['api-id'] = 'kt00008';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00008Param = { ...kt00008Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00008Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00009(kt00009Param: KT00009Param) {
		try {
			this.headers['api-id'] = 'kt00009';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00009Param = { ...kt00009Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00009Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00010(kt00010Param: KT00010Param) {
		try {
			this.headers['api-id'] = 'kt00010';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00010Param = { ...kt00010Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00010Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00011(kt00011Param: KT00011Param) {
		try {
			this.headers['api-id'] = 'kt00011';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00011Param = { ...kt00011Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00011Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00012(kt00012Param: KT00012Param) {
		try {
			this.headers['api-id'] = 'kt00012';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00012Param = { ...kt00012Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00012Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00013(kt00013Param: KT00013Param) {
		try {
			this.headers['api-id'] = 'kt00013';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00013Param = { ...kt00013Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00013Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00015(kt00015Param: KT00015Param) {
		try {
			this.headers['api-id'] = 'kt00015';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00015Param = { ...kt00015Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00015Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00016(kt00016Param: KT00016Param) {
		try {
			this.headers['api-id'] = 'kt00016';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00016Param = { ...kt00016Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00016Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00017(kt00017Param: KT00017Param) {
		try {
			this.headers['api-id'] = 'kt00017';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00017Param = { ...kt00017Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00017Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}

	async kt00018(kt00018Param: KT00018Param) {
		try {
			this.headers['api-id'] = 'kt00018';
			this.headers['authorization'] = await this.oauth2.getBearerToken();

			const params: KT00018Param = { ...kt00018Param };
			const response = await this.httpService.axiosRef.post(`${this.domain}${this.url}`, params, { headers: this.headers });
			return response.data as KT00018Response;
		} catch (e) {
			throw new InternalServerErrorException(e.message);
		}
	}
}
