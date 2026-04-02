export interface KA50012Param {
	stk_cd: string;
	base_dt: string;
}

interface GoldDalyTrnsn {
	cur_prc: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	acc_trde_prica: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	dt: string;
	pre_sig: string;
	orgn_netprps: string;
	for_netprps: string;
	ind_netprps: string;
}

export interface KA50012Response {
	gold_daly_trnsn: GoldDalyTrnsn[];
	return_code: number;
	return_msg: string;
}
