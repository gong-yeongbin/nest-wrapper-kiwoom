export interface KA10035Param {
	mrkt_tp: string;
	trde_tp: string;
	base_dt_tp: string;
	stex_tp: string;
}

interface ForContNettrdeUpper {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	dm1: string;
	dm2: string;
	dm3: string;
	tot: string;
	limit_exh_rt: string;
	pred_pre_1: string;
	pred_pre_2: string;
	pred_pre_3: string;
}

export interface KA10035Response {
	for_cont_nettrde_upper: ForContNettrdeUpper[];
	return_code: number;
	return_msg: string;
}
