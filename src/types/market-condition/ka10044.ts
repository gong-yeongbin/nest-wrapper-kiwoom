export interface KA10044Param {
	strt_dt: string;
	end_dt: string;
	trde_tp: string;
	mrkt_tp: string;
	stex_tp: string;
}

interface DalyOrgnTrdeStk {
	stk_cd: string;
	stk_nm: string;
	netprps_qty: string;
	netprps_amt: string;
	prsm_avg_pric: string;
	cur_prc: string;
	avg_pric_pre: string;
	pre_rt: string;
}

export interface KA10044Response {
	daly_orgn_trde_stk: DalyOrgnTrdeStk[];
	return_code: number;
	return_msg: string;
}
