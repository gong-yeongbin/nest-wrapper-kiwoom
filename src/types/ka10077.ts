export interface KA10077Param {
	stk_cd: string;
}

interface tdyRlztPlDtl {
	stk_nm: string;
	cntr_qty: string;
	buy_uv: string;
	cntr_pric: string;
	tdy_sel_pl: string;
	pl_rt: string;
	tdy_trde_cmsn: string;
	tdy_trde_tax: string;
	stk_cd: string;
}

export interface KA10077Response {
	tdy_rlzt_pl_dtl: tdyRlztPlDtl[];
	tdy_rlzt_pl: string;
	return_code: number;
	return_msg: string;
}
