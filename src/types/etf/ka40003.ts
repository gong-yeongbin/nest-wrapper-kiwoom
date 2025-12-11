export interface KA40003Param {
	stk_cd: string; // 종목코드
}

interface EtfdalyTrnsn {
	cntr_dt: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	pre_rt: string;
	trde_qty: string;
	nav: string;
	acc_trde_prica: string;
	navidex_dispty_rt: string;
	navetfdispty_rt: string;
	trace_eor_rt: string;
	trace_cur_prc: string;
	trace_pred_pre: string;
	trace_pre_sig: string;
}

export interface KA40003Response {
	etfdaly_trnsn: EtfdalyTrnsn[];
	return_code: number;
	return_msg: string;
}
