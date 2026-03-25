export interface KA10063Param {
	mrkt_tp: string;
	amt_qty_tp: string;
	invsr: string;
	frgn_all: string;
	smtm_netprps_tp: string;
	stex_tp: string;
}

interface OpmrInvsrTrde {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	acc_trde_qty: string;
	netprps_qty: string;
	prev_pot_netprps_qty: string;
	netprps_irds: string;
	buy_qty: string;
	buy_qty_irds: string;
	sell_qty: string;
	sell_qty_irds: string;
}

export interface KA10063Response {
	opmr_invsr_trde: OpmrInvsrTrde[];
	return_code: number;
	return_msg: string;
}
