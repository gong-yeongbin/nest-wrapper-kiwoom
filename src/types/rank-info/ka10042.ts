export interface KA10042Param {
	stk_cd: string;
	strt_dt: string;
	end_dt: string;
	qry_dt_tp: string;
	pot_tp: string;
	dt: string;
	sort_base: string;
}

interface NetprpsTrdeOriRank {
	rank: string;
	mmcm_cd: string;
	mmcm_nm: string;
}

export interface KA10042Response {
	netprps_trde_ori_rank: NetprpsTrdeOriRank[];
	return_code: number;
	return_msg: string;
}
