export interface KA10033Param {
	mrkt_tp: string;
	trde_qty_tp: string;
	stk_cnd: string;
	updown_incls: string;
	crd_cnd: string;
	stex_tp: string;
}

interface CrdRtUpper {
	stk_infr: string;
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	crd_rt: string;
	sel_req: string;
	buy_req: string;
	now_trde_qty: string;
}

export interface KA10033Response {
	crd_rt_upper: CrdRtUpper[];
	return_code: number;
	return_msg: string;
}
