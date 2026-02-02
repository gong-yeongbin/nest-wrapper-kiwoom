export interface KA10030Param {
	mrkt_tp: string;
	sort_tp: string;
	mang_stk_incls: string;
	crd_tp: string;
	trde_qty_tp: string;
	pric_tp: string;
	trde_prica_tp: string;
	mrkt_open_tp: string;
	stex_tp: string;
}

interface TdyTrdeQtyUpper {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	pred_rt: string;
	trde_tern_rt: string;
	trde_amt: string;
	opmr_trde_qty: string;
	opmr_pred_rt: string;
	opmr_trde_rt: string;
	opmr_trde_amt: string;
	af_mkrt_trde_qty: string;
	af_mkrt_pred_rt: string;
	af_mkrt_trde_rt: string;
	af_mkrt_trde_amt: string;
	bf_mkrt_trde_qty: string;
	bf_mkrt_pred_rt: string;
	bf_mkrt_trde_rt: string;
	bf_mkrt_trde_amt: string;
}

export interface KA10030Response {
	tdy_trde_qty_upper: TdyTrdeQtyUpper[];
	return_code: number;
	return_msg: string;
}
