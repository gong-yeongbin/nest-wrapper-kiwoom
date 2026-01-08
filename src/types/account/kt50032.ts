export interface KT50032Param {
	strt_dt: string;
	end_dt: string;
	tp: string;
	stk_cd: string;
}

export interface GoldTrdeHist {
	deal_dt: string;
	deal_no: string;
	rmrk_nm: string;
	deal_qty: string;
	gold_spot_vat: string;
	exct_amt: string;
	dly_sum: string;
	entra_remn: string;
	mdia_nm: string;
	orig_deal_no: string;
	stk_nm: string;
	uv_exrt: string;
	cmsn: string;
	uncl_ocr: string;
	rpym_sum: string;
	spot_remn: string;
	proc_time: string;
	rcpy_no: string;
	stk_cd: string;
	deal_amt: string;
	tax_tot_amt: string;
	cntr_dt: string;
	proc_brch_nm: string;
	prcsr: string;
}

export interface KT50032Response {
	acnt_print: string;
	gold_trde_hist: GoldTrdeHist[];
	return_code: number;
	return_msg: string;
}
