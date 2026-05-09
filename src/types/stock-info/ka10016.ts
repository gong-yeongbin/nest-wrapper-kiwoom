export interface KA10016Param {
	mrkt_tp: string;
	ntl_tp: string;
	high_low_close_tp: string;
	stk_cnd: string;
	trde_qty_tp: string;
	crd_cnd: string;
	updown_incls: string;
	dt: string;
	stex_tp: string;
}

interface NtlPric {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	pred_trde_qty_pre_rt: string;
	sel_bid: string;
	buy_bid: string;
	high_pric: string;
	low_pric: string;
}

export interface KA10016Response {
	ntl_pric: NtlPric[];
	return_code: number;
	return_msg: string;
}
