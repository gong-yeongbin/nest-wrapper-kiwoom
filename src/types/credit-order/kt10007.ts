export interface KT10007Param {
	dmst_stex_tp: string;
	stk_cd: string;
	ord_qty: string;
	ord_uv: string;
	trde_tp: string;
	crd_deal_tp: string;
	crd_loan_dt: string;
	cond_uv: string;
}

export interface KT10007Response {
	ord_no: string;
	dmst_stex_tp: string;
	return_code: number;
	return_msg: string;
}
