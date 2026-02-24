export interface KA10037Param {
	mrkt_tp: string;
	dt: string;
	trde_tp: string;
	sort_tp: string;
	stex_tp: string;
}

interface FrgnWicketTrdeUpper {
	rank: string;
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	sel_trde_qty: string;
	buy_trde_qty: string;
	netprps_trde_qty: string;
	netprps_prica: string;
	trde_qty: string;
	trde_prica: string;
}

export interface KA10037Response {
	frgn_wicket_trde_upper: FrgnWicketTrdeUpper[];
	return_code: number;
	return_msg: string;
}
