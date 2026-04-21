export interface KT10009Param {
	dmst_stex_tp: string;
	orig_ord_no: string;
	stk_cd: string;
	cncl_qty: string;
}

export interface KT10009Response {
	ord_no: string;
	base_orig_ord_no: string;
	cncl_qty: string;
	return_code: number;
	return_msg: string;
}
