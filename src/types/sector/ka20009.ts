export interface KA20009Param {
	mrkt_tp: string;
	inds_cd: string;
}

interface IndsCurPrcDalyRept {
	dt_n: string;
	cur_prc_n: string;
	pred_pre_sig_n: string;
	pred_pre_n: string;
	flu_rt_n: string;
	acc_trde_qty_n: string;
}

export interface KA20009Response {
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	trde_prica: string;
	trde_frmatn_stk_num: string;
	trde_frmatn_rt: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	upl: string;
	rising: string;
	stdns: string;
	fall: string;
	lst: string;
	'52wk_hgst_pric': string;
	'52wk_hgst_pric_dt': string;
	'52wk_hgst_pric_pre_rt': string;
	'52wk_lwst_pric': string;
	'52wk_lwst_pric_dt': string;
	'52wk_lwst_pric_pre_rt': string;
	inds_cur_prc_daly_rept: IndsCurPrcDalyRept[];
	return_code: number;
	return_msg: string;
}
