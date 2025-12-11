export interface KT00005Param {
	dmst_stex_tp: string;
}

interface StkCntrRemn {
	crd_tp: string;
	loan_dt: string;
	expr_dt: string;
	stk_cd: string;
	stk_nm: string;
	setl_remn: string;
	cur_qty: string;
	cur_prc: string;
	buy_uv: string;
	pur_amt: string;
	evlt_amt: string;
	evltv_prft: string;
	pl_rt: string;
}

export interface KT00005Response {
	entr: string;
	entr_d1: string;
	entr_d2: string;
	pymn_alow_amt: string;
	uncl_stk_amt: string;
	repl_amt: string;
	rght_repl_amt: string;
	ord_alowa: string;
	ch_uncla: string;
	crd_int_npay_gold: string;
	etc_loana: string;
	nrpy_loan: string;
	profa_ch: string;
	repl_profa: string;
	stk_buy_tot_amt: string;
	evlt_amt_tot: string;
	tot_pl_tot: string;
	tot_pl_rt: string;
	tot_re_buy_alowa: string;
	'20ord_alow_amt': string;
	'30ord_alow_amt': string;
	'40ord_alow_amt': string;
	'50ord_alow_amt': string;
	'60ord_alow_amt': string;
	'100ord_alow_amt': string;
	crd_loan_tot: string;
	crd_loan_ls_tot: string;
	crd_grnt_rt: string;
	dpst_grnt_use_amt_amt: string;
	grnt_loan_amt: string;
	stk_cntr_remn: StkCntrRemn[];
	return_code: number;
	return_msg: string;
}
