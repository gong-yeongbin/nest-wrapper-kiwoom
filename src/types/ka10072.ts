export interface KA10072Param {
	stk_cd: string;
	strt_dt: string;
}

interface DtStkDivRlztPl {
	stk_nm: string;
	cntr_qty: string;
	buy_uv: string;
	cntr_pric: string;
	tdy_sel_pl: string;
	pl_rt: string;
	stk_cd: string;
	tdy_trde_cmsn: string;
	tdy_trde_tax: string;
	wthd_alowa: string;
	loan_dt: string;
	crd_tp: string;
	stk_cd_1: string;
	tdy_sel_pl_1: string;
}

export interface KA10072Response {
	dt_stk_div_rlzt_pl: DtStkDivRlztPl[];
	return_code: number;
	return_msg: string;
}
