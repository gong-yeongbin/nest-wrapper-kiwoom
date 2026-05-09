export interface KA10018Param {
	high_low_tp: string;
	alacc_rt: string;
	mrkt_tp: string;
	trde_qty_tp: string;
	stk_cnd: string;
	crd_cnd: string;
	stex_tp: string;
}

interface HighLowPricAlacc {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	sel_bid: string;
	buy_bid: string;
	tdy_high_pric: string;
	tdy_low_pric: string;
}

export interface KA10018Response {
	high_low_pric_alacc: HighLowPricAlacc[];
	return_code: number;
	return_msg: string;
}
