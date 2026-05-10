export interface KA10026Param {
	pertp: string;
	stex_tp: string;
}

interface HighLowPer {
	stk_cd: string;
	stk_nm: string;
	per: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	now_trde_qty: string;
	sel_bid: string;
}

export interface KA10026Response {
	high_low_per: HighLowPer[];
	return_code: number;
	return_msg: string;
}
