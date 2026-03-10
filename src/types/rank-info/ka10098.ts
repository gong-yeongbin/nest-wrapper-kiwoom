export interface KA10098Param {
	mrkt_tp: string;
	sort_base: string;
	stk_cnd: string;
	trde_qty_cnd: string;
	crd_cnd: string;
	trde_prica: string;
}

interface OvtSigpricFluRtRank {
	rank: string;
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	sel_tot_req: string;
	buy_tot_req: string;
	acc_trde_qty: string;
	acc_trde_prica: string;
	tdy_close_pric: string;
	tdy_close_pric_flu_rt: string;
}

export interface KA10098Response {
	ovt_sigpric_flu_rt_rank: OvtSigpricFluRtRank[];
	return_code: number;
	return_msg: string;
}
