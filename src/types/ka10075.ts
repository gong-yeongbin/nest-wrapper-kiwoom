export interface KA10075Param {
	all_stk_tp: string;
	trde_tp: string;
	stk_cd: string;
	stex_tp: string;
}

interface Oso {
	acnt_no: string;
	ord_no: string;
	mang_empno: string;
	stk_cd: string;
	tsk_tp: string;
	ord_stt: string;
	stk_nm: string;
	ord_qty: string;
	ord_pric: string;
	oso_qty: string;
	cntr_tot_amt: string;
	orig_ord_no: string;
	io_tp_nm: string;
	trde_tp: string;
	tm: string;
	cntr_no: string;
	cntr_pric: string;
	cntr_qty: string;
	cur_prc: string;
	sel_bid: string;
	buy_bid: string;
	unit_cntr_pric: string;
	unit_cntr_qty: string;
	tdy_trde_cmsn: string;
	tdy_trde_tax: string;
	ind_invsr: string;
	stex_tp: string;
	stex_tp_txt: string;
	sor_yn: string;
}
export interface KA10075Response {
	oso: Oso[];
	return_code: number;
	return_msg: string;
}
