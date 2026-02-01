export interface KA10029Param {
	mrkt_tp: string;
	sort_tp: string;
	trde_qty_cnd: string;
	stk_cnd: string;
	crd_cnd: string;
	pric_cnd: string;
	stex_tp: string;
}

interface ExpCntrFluRtUpper {
	stk_cd: string;
	stk_nm: string;
	exp_cntr_pric: string;
	base_pric: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	exp_cntr_qty: string;
	sel_req: string;
	sel_bid: string;
	buy_bid: string;
	buy_req: string;
}

export interface KA10029Response {
	exp_cntr_flu_rt_upper: ExpCntrFluRtUpper[];
	return_code: number;
	return_msg: string;
}
