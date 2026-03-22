export interface KA10045Param {
	stk_cd: string;
	strt_dt: string;
	end_dt: string;
	orgn_prsm_unp_tp: string;
	for_prsm_unp_tp: string;
}

interface StkOrgnTrdeTrnsn {
	dt: string;
	close_pric: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	orgn_dt_acc: string;
	orgn_daly_nettrde_qty: string;
	for_dt_acc: string;
	for_daly_nettrde_qty: string;
	limit_exh_rt: string;
}

export interface KA10045Response {
	orgn_prsm_avg_pric: string;
	for_prsm_avg_pric: string;
	stk_orgn_trde_trnsn: StkOrgnTrdeTrnsn[];
	return_code: number;
	return_msg: string;
}
