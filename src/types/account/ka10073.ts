export interface KA10073Param {
	stk_cd: string;
	strt_dt: string;
	end_dt: string;
}

interface DtStkRlztPl {
	dt: string;
	tdy_htssel_cmsn: string;
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
}

export interface KA10073Response {
	dt_stk_rlzt_pl: DtStkRlztPl[];
	return_code: number;
	return_msg: string;
}
