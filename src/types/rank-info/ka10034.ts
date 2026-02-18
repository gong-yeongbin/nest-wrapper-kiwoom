export interface KA10034Param {
	mrkt_tp: string;
	trde_tp: string;
	dt: string;
	stex_tp: string;
}

interface ForDtTrdeUpper {
	rank: string;
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	sel_bid: string;
	buy_bid: string;
	trde_qty: string;
	netprps_qty: string;
	gain_pos_stkcnt: string;
}

export interface KA10034Response {
	for_dt_trde_upper: ForDtTrdeUpper[];
	return_code: number;
	return_msg: string;
}
