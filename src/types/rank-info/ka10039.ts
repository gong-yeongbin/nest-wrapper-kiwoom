export interface KA10039Param {
	mmcm_cd: string;
	trde_qty_tp: string;
	trde_tp: string;
	dt: string;
	stex_tp: string;
}

interface SecTrdeUpper {
	rank: string;
	stk_cd: string;
	stk_nm: string;
	prid_stkpc_flu: string;
	flu_rt: string;
	prid_trde_qty: string;
	netprps: string;
	buy_trde_qty: string;
	sel_trde_qty: string;
	netprps_amt: string;
	buy_amt: string;
	sell_amt: string;
}

export interface KA10039Response {
	sec_trde_upper: SecTrdeUpper[];
	return_code: number;
	return_msg: string;
}
