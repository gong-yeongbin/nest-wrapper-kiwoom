export interface KA40006Param {
	stk_cd: string; // 종목코드
}

interface EtftislTrnsn {
	tm: string;
	close_pric: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	nav: string;
	trde_prica: string;
	navidex: string;
	navetf: string;
	trace: string;
	trace_idex: string;
	trace_idex_pred_pre: string;
	trace_idex_pred_pre_sig: string;
}

export interface KA40006Response {
	stk_nm: string;
	etfobjt_idex_nm: string;
	wonju_pric: string;
	etftxon_type: string;
	etntxon_type: string;
	etftisl_trnsn: EtftislTrnsn[];
	return_code: number;
	return_msg: string;
}
