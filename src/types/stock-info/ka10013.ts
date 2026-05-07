export interface KA10013Param {
	stk_cd: string;
	dt: string;
	qry_tp: string;
}

interface CrdTrdeTrend {
	dt: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	trde_qty: string;
	new: string;
	rpya: string;
	remn: string;
	amt: string;
	pre: string;
	shr_rt: string;
	remn_rt: string;
}

export interface KA10013Response {
	crd_trde_trend: CrdTrdeTrend[];
	return_code: number;
	return_msg: string;
}
