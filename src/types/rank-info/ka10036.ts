export interface KA10036Param {
	mrkt_tp: string;
	dt: string;
	stex_tp: string;
}

interface ForLimitExhRtIncrsUpper {
	rank: string;
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	trde_qty: string;
	poss_stkcnt: string;
	gain_pos_stkcnt: string;
	base_limit_exh_rt: string;
	limit_exh_rt: string;
	exh_rt_incrs: string;
}

export interface KA10036Response {
	for_limit_exh_rt_incrs_upper: ForLimitExhRtIncrsUpper[];
	return_code: number;
	return_msg: string;
}
