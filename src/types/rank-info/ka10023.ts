export interface KA10023Param {
	mrkt_tp: string;
	sort_tp: string;
	tm_tp: string;
	trde_qty_tp: string;
	tm: string;
	stk_cnd: string;
	pric_tp: string;
	stex_tp: string;
}

interface TrdeQtySdnin {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	prev_trde_qty: string;
	now_trde_qty: string;
	sdnin_qty: string;
	sdnin_rt: string;
}

export interface KA10023Response {
	trde_qty_sdnin: TrdeQtySdnin[];
	return_code: number;
	return_msg: string;
}
