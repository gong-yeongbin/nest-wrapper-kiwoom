export interface KT00002Param {
	start_dt: string;
	end_dt: string;
}
interface DalyPrsmDpstAsetAmtPrst {
	dt: string;
	entr: string;
	grnt_use_amt: string;
	crd_loan: string;
	ls_grnt: string;
	repl_amt: string;
	prsm_dpst_aset_amt: string;
	prsm_dpst_aset_amt_bncr_skip: string;
}

export interface KT00002Response {
	daly_prsm_dpst_aset_amt_prst: DalyPrsmDpstAsetAmtPrst[];
	return_code: number;
	return_msg: string;
}
