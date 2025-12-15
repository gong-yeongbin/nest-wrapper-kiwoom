export interface KT00008Param {
	strt_dcd_seq: string;
}

interface AcntNxdySetlFrcsPrpsArray {
	seq: string;
	stk_cd: string;
	loan_dt: string;
	qty: string;
	engg_amt: string;
	cmsn: string;
	incm_tax: string;
	rstx: string;
	stk_nm: string;
	sell_tp: string;
	unp: string;
	exct_amt: string;
	trde_tax: string;
	resi_tax: string;
	crd_tp: string;
}

export interface KT00008Response {
	trde_dt: string;
	setl_dt: string;
	sell_amt_sum: string;
	buy_amt_sum: string;
	acnt_nxdy_setl_frcs_prps_array: AcntNxdySetlFrcsPrpsArray[];
	return_code: number;
	return_msg: string;
}
