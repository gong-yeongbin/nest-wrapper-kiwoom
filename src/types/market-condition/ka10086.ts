export interface KA10086Param {
	stk_cd: string;
	qry_dt: string;
	indc_tp: string;
}

interface DalyStkpc {
	date: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	close_pric: string;
	pred_rt: string;
	flu_rt: string;
	trde_qty: string;
	amt_mn: string;
	crd_rt: string;
	ind: string;
	orgn: string;
	for_qty: string;
	frgn: string;
	prm: string;
	for_rt: string;
	for_poss: string;
	for_wght: string;
	for_netprps: string;
	orgn_netprps: string;
	ind_netprps: string;
	crd_remn_rt: string;
}

export interface KA10086Response {
	daly_stkpc: DalyStkpc[];
	return_code: number;
	return_msg: string;
}
