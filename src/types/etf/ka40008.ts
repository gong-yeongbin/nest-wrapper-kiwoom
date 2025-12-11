export interface KA40008Param {
	stk_cd: string; // 종목코드
}

export interface EtfnetprpsQtyArray {
	dt: string;
	cur_prc_n: string;
	pre_sig_n: string;
	pred_pre_n: string;
	acc_trde_qty: string;
	for_netprps_qty: string;
	orgn_netprps_qty: string;
}

export interface KA40008Response {
	cntr_tm: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	trde_qty: string;
	etfnetprps_qty_array: EtfnetprpsQtyArray[];
	return_code: number;
	return_msg: string;
}
