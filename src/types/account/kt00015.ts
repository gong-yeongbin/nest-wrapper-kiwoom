export interface KT00015Param {
	strt_dt: string;
	end_dt: string;
	tp: string;
	stk_cd: string;
	crnc_cd: string;
	gds_tp: string;
	frgn_stex_code: string;
	dmst_stex_tp: string;
}
interface TrstOvrlTrdePrpsArray {
	trde_dt: string;
	trde_no: string;
	rmrk_nm: string;
	crd_deal_tp_nm: string;
	exct_amt: string;
	loan_amt_rpya: string;
	fc_trde_amt: string;
	fc_exct_amt: string;
	entra_remn: string;
	crnc_cd: string;
	trde_ocr_tp: string;
	trde_kind_nm: string;
	stk_nm: string;
	trde_amt: string;
	trde_agri_tax: string;
	rpy_diffa: string;
	fc_trde_tax: string;
	dly_sum: string;
	fc_entra: string;
	mdia_tp_nm: string;
	io_tp: string;
	io_tp_nm: string;
	orig_deal_no: string;
	stk_cd: string;
	trde_qty_jwa_cnt: string;
	cmsn: string;
	int_ls_usfe: string;
	fc_cmsn: string;
	fc_dly_sum: string;
	vlbl_nowrm: string;
	proc_tm: string;
	isin_cd: string;
	stex_cd: string;
	stex_nm: string;
	trde_unit: string;
	incm_resi_tax: string;
	loan_dt: string;
	uncl_ocr: string;
	rpym_sum: string;
	cntr_dt: string;
	rcpy_no: string;
	prcsr: string;
	proc_brch: string;
	trde_stle: string;
	txon_base_pric: string;
	tax_sum_cmsn: string;
	frgn_pay_txam: string;
	fc_uncl_ocr: string;
	rpym_sum_fr: string;
	rcpmnyer: string;
	trde_prtc_tp: string;
}

export interface KT00015Response {
	acnt_no: string;
	trst_ovrl_trde_prps_array: TrstOvrlTrdePrpsArray[];
	return_code: number;
	return_msg: string;
}
