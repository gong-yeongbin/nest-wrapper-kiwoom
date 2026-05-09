export interface KA10024Param {
	mrkt_tp: string;
	cycle_tp: string;
	trde_qty_tp: string;
	stex_tp: string;
}

interface TrdeQtyUpdt {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	prev_trde_qty: string;
	now_trde_qty: string;
	sel_bid: string;
	buy_bid: string;
}

export interface KA10024Response {
	trde_qty_updt: TrdeQtyUpdt[];
	return_code: number;
	return_msg: string;
}
