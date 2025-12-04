export interface KA10170Param {
	base_dt: string;
	ottks_tp: string;
	ch_crd_tp: string;
}

interface TdyTrdeDiary {
	stk_nm: string;
	buy_avg_pric: string;
	buy_qty: string;
	sel_avg_pric: string;
	sell_qty: string;
	cmsn_alm_tax: string;
	pl_amt: string;
	sell_amt: string;
	buy_amt: string;
	prft_rt: string;
	stk_cd: string;
}

export interface KA10170Response {
	tot_sell_amt: string;
	tot_buy_amt: string;
	tot_cmsn_tax: string;
	tot_exct_amt: string;
	tot_pl_amt: string;
	tot_prft_rt: string;
	tdy_trde_diary: TdyTrdeDiary[];
	return_code: number;
	return_msg: string;
}
