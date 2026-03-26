export interface KA10066Param {
	mrkt_tp: string;
	amt_qty_tp: string;
	trde_tp: string;
	stex_tp: string;
}

interface OpafInvsrTrde {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	ind_invsr: string;
	frgnr_invsr: string;
	orgn: string;
	fnnc_invt: string;
	insrnc: string;
	invtrt: string;
	etc_fnnc: string;
	bank: string;
	penfnd_etc: string;
	samo_fund: string;
	natn: string;
	etc_corp: string;
}

export interface KA10066Response {
	opaf_invsr_trde: OpafInvsrTrde[];
	return_code: number;
	return_msg: string;
}
