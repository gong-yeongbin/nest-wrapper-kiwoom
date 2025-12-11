export interface KA10085Param {
	stex_tp: string;
}

interface AcntPrftRt {
	dt: string;
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pur_pric: string;
	pur_amt: string;
	rmnd_qty: string;
	tdy_sel_pl: string;
	tdy_trde_cmsn: string;
	tdy_trde_tax: string;
	crd_tp: string;
	loan_dt: string;
	setl_remn: string;
	clrn_alow_qty: string;
	crd_amt: string;
	crd_int: string;
	expr_dt: string;
}

export interface KA10085Response {
	acnt_prft_rt: AcntPrftRt[];
	return_code: number;
	return_msg: string;
}
