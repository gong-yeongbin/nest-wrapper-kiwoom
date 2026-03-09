export interface KA10065Param {
	trde_tp: string;
	mrkt_tp: string;
	orgn_tp: string;
}

interface OpmrInvsrTrdeUpper {
	stk_cd: string;
	stk_nm: string;
	sel_qty: string;
	buy_qty: string;
	netslmt: string;
}

export interface KA10065Response {
	opmr_invsr_trde_upper: OpmrInvsrTrdeUpper[];
	return_code: number;
	return_msg: string;
}
