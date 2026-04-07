export interface KA50101Param {
	stk_cd: string;
	tic_scope: string;
}

interface GoldBid {
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
	lpmmcm_nm_1: string;
	stex_tp: string;
}

export interface KA50101Response {
	gold_bid: GoldBid[];
	return_code: number;
	return_msg: string;
}
