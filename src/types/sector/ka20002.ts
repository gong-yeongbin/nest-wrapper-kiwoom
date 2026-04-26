export interface KA20002Param {
	mrkt_tp: string;
	inds_cd: string;
	stex_tp: string;
}

interface IndStkpc {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	now_trde_qty: string;
	sel_bid: string;
	buy_bid: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
}

export interface KA20002Response {
	inds_stkpc: IndStkpc[];
	return_code: number;
	return_msg: string;
}
