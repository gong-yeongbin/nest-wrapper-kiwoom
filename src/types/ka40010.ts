export interface KA40010Param {
	stk_cd: string; // 종목코드
}

export interface EtftislTrnsn {
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	trde_qty: string;
	for_netprps: string;
}

export interface KA40010Response {
	etftisl_trnsn: EtftislTrnsn[];
	return_code: number;
	return_msg: string;
}
