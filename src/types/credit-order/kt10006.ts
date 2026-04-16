export interface KT10006Param {
	dmst_stex_tp: string;
	stk_cd: string;
	ord_qty: string;
	ord_uv: string;
	trde_tp: string;
	cond_uv: string;
}

export interface KT10006Response {
	ord_no: string;
	dmst_stex_tp: string;
	return_code: number;
	return_msg: string;
}
