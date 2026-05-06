export interface KA10003Param {
	stk_cd: string;
}

interface CntrInfr {
	tm: string;
	cur_prc: string;
	pred_pre: string;
	pre_rt: string;
	pri_sel_bid_unit: string;
	pri_buy_bid_unit: string;
	cntr_trde_qty: string;
	sign: string;
	acc_trde_qty: string;
	acc_trde_prica: string;
	cntr_str: string;
	stex_tp: string;
}

export interface KA10003Response {
	cntr_infr: CntrInfr[];
	return_code: number;
	return_msg: string;
}
