export interface KT00018Param {
	qry_tp: string;
	dmst_stex_tp: string;
}

interface AcntEvltRemnIndvTot {
	stk_cd: string;
	stk_nm: string;
	evltv_prft: string;
	prft_rt: string;
	pur_pric: string;
	pred_close_pric: string;
	rmnd_qty: string;
	trde_able_qty: string;
	cur_prc: string;
	pred_buyq: string;
	pred_sellq: string;
	tdy_buyq: string;
	tdy_sellq: string;
	pur_amt: string;
	pur_cmsn: string;
	evlt_amt: string;
	sell_cmsn: string;
	tax: string;
	sum_cmsn: string;
	poss_rt: string;
	crd_tp: string;
	crd_tp_nm: string;
	crd_loan_dt: string;
}

export interface KT00018Response {
	tot_pur_amt: string;
	tot_evlt_amt: string;
	tot_evlt_pl: string;
	tot_prft_rt: string;
	prsm_dpst_aset_amt: string;
	tot_loan_amt: string;
	tot_crd_loan_amt: string;
	tot_crd_ls_amt: string;
	acnt_evlt_remn_indv_tot: AcntEvltRemnIndvTot[];
	return_code: number;
	return_msg: string;
}
