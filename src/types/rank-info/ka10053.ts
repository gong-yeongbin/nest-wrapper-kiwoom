export interface KA10053Param {
	stk_cd: string;
}

interface TdyUpperScesnOri {
	sel_scesn_tm: string;
	sell_qty: string;
	sel_upper_scesn_ori: string;
	buy_scesn_tm: string;
	buy_qty: string;
	buy_upper_scesn_ori: string;
	qry_dt: string;
	qry_tm: string;
}

export interface KA10053Response {
	tdy_upper_scesn_ori: TdyUpperScesnOri[];
	return_code: number;
	return_msg: string;
}
