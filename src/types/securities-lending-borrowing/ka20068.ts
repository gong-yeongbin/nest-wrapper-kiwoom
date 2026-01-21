export interface KA20068Param {
	strt_dt: string;
	end_dt: string;
	all_tp: string;
	stk_cd: string;
}

interface DbrtTrdeTrnsn {
	dt: string;
	dbrt_trde_cntrcnt: string;
	dbrt_trde_rpy: string;
	dbrt_trde_irds: string;
	rmnd: string;
	remn_amt: string;
}

export interface KA20068Response {
	dbrt_trde_trnsn: DbrtTrdeTrnsn[];
	return_code: number;
	return_msg: string;
}
