export interface KA10031Param {
	mrkt_tp: string;
	qry_tp: string;
	rank_strt: string;
	rank_end: string;
	stex_tp: string;
}

interface PredTrdeQtyUpper {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	trde_qty: string;
}

export interface KA10031Response {
	pred_trde_qty_upper: PredTrdeQtyUpper[];
	return_code: number;
	return_msg: string;
}
