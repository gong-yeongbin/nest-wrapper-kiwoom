export interface KA10062Param {
	strt_dt: string;
	end_dt: string;
	mrkt_tp: string;
	trde_tp: string;
	sort_cnd: string;
	unit_tp: string;
	stex_tp: string;
}

interface EqlNettrdeRank {
	stk_cd: string;
	rank: string;
	stk_nm: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	acc_trde_qty: string;
	orgn_nettrde_qty: string;
	orgn_nettrde_amt: string;
	orgn_nettrde_avg_pric: string;
	for_nettrde_qty: string;
	for_nettrde_amt: string;
	for_nettrde_avg_pric: string;
	nettrde_qty: string;
	nettrde_amt: string;
}

export interface KA10062Response {
	eql_nettrde_rank: EqlNettrdeRank[];
	return_code: number;
	return_msg: string;
}
