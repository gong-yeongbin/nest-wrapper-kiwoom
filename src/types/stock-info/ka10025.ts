export interface KA10025Param {
	mrkt_tp: string;
	prps_cnctr_rt: string;
	cur_prc_entry: string;
	prpscnt: string;
	cycle_tp: string;
	stex_tp: string;
}

interface PrpsCnctr {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	now_trde_qty: string;
	pric_strt: string;
	pric_end: string;
	prps_qty: string;
	prps_rt: string;
}

export interface KA10025Response {
	prps_cnctr: PrpsCnctr[];
	return_code: number;
	return_msg: string;
}
