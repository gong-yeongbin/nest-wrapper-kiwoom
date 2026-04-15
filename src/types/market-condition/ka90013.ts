export interface KA90013Param {
	amt_qty_tp: string;
	stk_cd: string;
	date: string;
}

interface StkDalyPrmTrdeTrnsn {
	dt: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	prm_sell_amt: string;
	prm_buy_amt: string;
	prm_netprps_amt: string;
	prm_netprps_amt_irds: string;
	prm_sell_qty: string;
	prm_buy_qty: string;
	prm_netprps_qty: string;
	prm_netprps_qty_irds: string;
	base_pric_tm: string;
	dbrt_trde_rpy_sum: string;
	remn_rcvord_sum: string;
	stex_tp: string;
}

export interface KA90013Response {
	stk_daly_prm_trde_trnsn: StkDalyPrmTrdeTrnsn[];
	return_code: number;
	return_msg: string;
}
