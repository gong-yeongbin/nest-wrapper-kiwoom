export interface KA10047Param {
	stk_cd: string;
}

interface CntrStrDaly {
	dt: string;
	cur_prc: string;
	pred_pre: string;
	pred_pre_sig: string;
	flu_rt: string;
	trde_qty: string;
	acc_trde_prica: string;
	acc_trde_qty: string;
	cntr_str: string;
	cntr_str_5min: string;
	cntr_str_20min: string;
	cntr_str_60min: string;
}

export interface KA10047Response {
	cntr_str_daly: CntrStrDaly[];
	return_code: number;
	return_msg: string;
}
