export interface KA10019Param {
	mrkt_tp: string;
	flu_tp: string;
	tm_tp: string;
	tm: string;
	trde_qty_tp: string;
	stk_cnd: string;
	crd_cnd: string;
	pric_cnd: string;
	updown_incls: string;
	stex_tp: string;
}

interface PricJmpflu {
	stk_cd: string;
	stk_cls: string;
	stk_nm: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	base_pric: string;
	cur_prc: string;
	base_pre: string;
	trde_qty: string;
	jmp_rt: string;
}

export interface KA10019Response {
	pric_jmpflu: PricJmpflu[];
	return_code: number;
	return_msg: string;
}
