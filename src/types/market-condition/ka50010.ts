export interface KA50010Param {
	stk_cd: string;
}

interface GoldCntr {
	cntr_pric: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	acc_trde_prica: string;
	cntr_trde_qty: string;
	tm: string;
	pre_sig: string;
	pri_sel_bid_unit: string;
	pri_buy_bid_unit: string;
	trde_pre: string;
	trde_tern_rt: string;
	cntr_str: string;
}

export interface KA50010Response {
	gold_cntr: GoldCntr[];
	return_code: number;
	return_msg: string;
}
