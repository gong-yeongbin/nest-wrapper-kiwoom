export interface KA50087Param {
	stk_cd: string;
}

interface GoldExptExec {
	exp_cntr_pric: string;
	exp_pred_pre: string;
	exp_flu_rt: string;
	exp_acc_trde_qty: string;
	exp_cntr_trde_qty: string;
	exp_tm: string;
	exp_pre_sig: string;
	stex_tp: string;
}

export interface KA50087Response {
	gold_expt_exec: GoldExptExec[];
	return_code: number;
	return_msg: string;
}
