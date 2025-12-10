export interface KT00004Param {
	qry_tp: string;
	dmst_stex_tp: string;
}

interface StkAcntEvltPrst {
	stk_cd: string;
	stk_nm: string;
	rmnd_qty: string;
	avg_prc: string;
	cur_prc: string;
	evlt_amt: string;
	pl_amt: string;
	pl_rt: string;
	loan_dt: string;
	pur_amt: string;
	setl_remn: string;
	pred_buyq: string;
	pred_sellq: string;
	tdy_buyq: string;
	tdy_sellq: string;
}

export interface KT00004Response {
	acnt_nm: string;
	brch_nm: string;
	entr: string;
	d2_entra: string;
	tot_est_amt: string;
	aset_evlt_amt: string;
	tot_pur_amt: string;
	prsm_dpst_aset_amt: string;
	tot_grnt_sella: string;
	tdy_lspft_amt: string;
	invt_bsamt: string;
	lspft_amt: string;
	tdy_lspft: string;
	lspft2: string;
	lspft: string;
	tdy_lspft_rt: string;
	lspft_ratio: string;
	lspft_rt: string;
	stk_acnt_evlt_prst: StkAcntEvltPrst[];
	return_code: number;
	return_msg: string;
}
