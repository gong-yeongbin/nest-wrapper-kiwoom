export interface KA10076Param {
	stk_cd: string;
	qry_tp: string;
	sell_tp: string;
	ord_no: string;
	stex_tp: string;
}

interface Cntr {
	ord_no: string;
	stk_nm: string;
	io_tp_nm: string;
	ord_pric: string;
	ord_qty: string;
	cntr_pric: string;
	cntr_qty: string;
	oso_qty: string;
	tdy_trde_cmsn: string;
	tdy_trde_tax: string;
	ord_stt: string;
	trde_tp: string;
	orig_ord_no: string;
	ord_tm: string;
	stk_cd: string;
	stex_tp: string;
	stex_tp_txt: string;
	sor_yn: string;
}

export interface KA10076Response {
	cntr: Cntr[];
	return_code: number;
	return_msg: string;
}
