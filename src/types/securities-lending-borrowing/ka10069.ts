export interface KA10069Param {
	strt_dt: string;
	end_dt: string;
	mrkt_tp: string;
}

interface DbrtTrdeUpper10stk {
	stk_nm: string;
	stk_cd: string;
	dbrt_trde_cntrcnt: string;
	dbrt_trde_rpy: string;
	rmnd: string;
	remn_amt: string;
}

export interface KA10069Response {
	dbrt_trde_cntrcnt_sum: string;
	dbrt_trde_rpy_sum: string;
	rmnd_sum: string;
	remn_amt_sum: string;
	dbrt_trde_cntrcnt_rt: string;
	dbrt_trde_rpy_rt: string;
	rmnd_rt: string;
	remn_amt_rt: string;
	dbrt_trde_upper_10stk: DbrtTrdeUpper10stk[];
	return_code: number;
	return_msg: string;
}
