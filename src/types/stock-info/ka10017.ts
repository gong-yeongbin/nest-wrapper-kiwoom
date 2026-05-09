export interface KA10017Param {
	mrkt_tp: string;
	updown_tp: string;
	sort_tp: string;
	stk_cnd: string;
	trde_qty_tp: string;
	crd_cnd: string;
	trde_gold_tp: string;
	stex_tp: string;
}

interface UpdownPric {
	stk_cd: string;
	stk_infr: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	pred_trde_qty: string;
	sel_req: string;
	sel_bid: string;
	buy_bid: string;
	buy_req: string;
	cnt: string;
}

export interface KA10017Response {
	updown_pric: UpdownPric[];
	return_code: number;
	return_msg: string;
}
