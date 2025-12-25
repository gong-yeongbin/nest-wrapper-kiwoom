export interface KT00016Param {
	fr_dt: string;
	to_dt: string;
}

export interface KT00016Response {
	mang_empno: string;
	mngr_nm: string;
	dept_nm: string;
	entr_fr: string;
	entr_to: string;
	scrt_evlt_amt_fr: string;
	scrt_evlt_amt_to: string;
	ls_grnt_fr: string;
	ls_grnt_to: string;
	crd_loan_fr: string;
	crd_loan_to: string;
	ch_uncla_fr: string;
	ch_uncla_to: string;
	krw_asgna_fr: string;
	krw_asgna_to: string;
	ls_evlta_fr: string;
	ls_evlta_to: string;
	rght_evlta_fr: string;
	rght_evlta_to: string;
	loan_amt_fr: string;
	loan_amt_to: string;
	etc_loana_fr: string;
	etc_loana_to: string;
	crd_int_npay_gold_fr: string;
	crd_int_npay_gold_to: string;
	crd_int_fr: string;
	crd_int_to: string;
	tot_amt_fr: string;
	tot_amt_to: string;
	invt_bsamt: string;
	evltv_prft: string;
	prft_rt: string;
	tern_rt: string;
	termin_tot_trns: string;
	termin_tot_pymn: string;
	termin_tot_inq: string;
	termin_tot_outq: string;
	futr_repl_sella: string;
	trst_repl_sella: string;
	return_code: number;
	return_msg: string;
}
