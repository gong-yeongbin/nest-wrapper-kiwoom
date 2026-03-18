export interface KA10011Param {
	newstk_recvrht_tp: string;
}

interface NewstkRecvrhtMrpr {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	fpr_sel_bid: string;
	fpr_buy_bid: string;
	acc_trde_qty: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
}

export interface KA10011Response {
	newstk_recvrht_mrpr: NewstkRecvrhtMrpr[];
	return_code: number;
	return_msg: string;
}
