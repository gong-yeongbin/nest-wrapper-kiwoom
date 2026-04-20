export interface KT10008Param {
	dmst_stex_tp: string;
	orig_ord_no: string;
	stk_cd: string;
	mdfy_qty: string;
	mdfy_uv: string;
	mdfy_cond_uv: string;
}

export interface KT10008Response {
	ord_no: string;
	base_orig_ord_no: string;
	mdfy_qty: string;
	dmst_stex_tp: string;
	return_code: number;
	return_msg: string;
}
