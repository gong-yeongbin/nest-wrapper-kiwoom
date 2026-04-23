export interface KA10051Param {
	mrkt_tp: string;
	amt_qty_tp: string;
	base_dt: string;
	stex_tp: string;
}

interface IndsNetprp {
	inds_cd: string;
	inds_nm: string;
	cur_prc: string;
	pre_smbol: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	sc_netprps: string;
	insrnc_netprps: string;
	invtrt_netprps: string;
	bank_netprps: string;
	jnsinkm_netprps: string;
	endw_netprps: string;
	etc_corp_netprps: string;
	ind_netprps: string;
	frgnr_netprps: string;
	native_trmt_frgnr_netprps: string;
	natn_netprps: string;
	samo_fund_netprps: string;
	orgn_netprps: string;
}

export interface KA10051Response {
	inds_netprps: IndsNetprp[];
	return_code: number;
	return_msg: string;
}
