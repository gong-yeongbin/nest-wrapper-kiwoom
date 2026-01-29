export interface KA10027Param {
	mrkt_tp: string;
	sort_tp: string;
	trde_qty_cnd: string;
	stk_cnd: string;
	crd_cnd: string;
	updown_incls: string;
	pric_cnd: string;
	trde_prica_cnd: string;
	stex_tp: string;
}

interface PredPreFluRtUpper {
	stk_cls: string;
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	sel_req: string;
	buy_req: string;
	now_trde_qty: string;
	cntr_str: string;
	cnt: string;
}

export interface KA10027Response {
	pred_pre_flu_rt_upper: PredPreFluRtUpper[];
	return_code: number;
	return_msg: string;
}
