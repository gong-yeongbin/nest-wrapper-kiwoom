export interface KA10014Param {
	stk_cd: string;
	tm_tp: string;
	strt_dt: string;
	end_dt: string;
}

interface ShrtsTrnsn {
	dt: string;
	close_pric: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	shrts_qty: string;
	ovr_shrts_qty: string;
	trde_wght: string;
	shrts_trde_prica: string;
	shrts_avg_pric: string;
}

export interface KA10014Response {
	shrts_trnsn: ShrtsTrnsn[];
	return_code: number;
	return_msg: string;
}
