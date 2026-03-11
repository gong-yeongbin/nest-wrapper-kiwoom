export interface KA90009Param {
	mrkt_tp: string;
	amt_qty_tp: string;
	qry_dt_tp: string;
	date: string;
	stex_tp: string;
}

interface FrgnrOrgnTrdeUpper {
	for_netslmt_stk_cd: string;
	for_netslmt_stk_nm: string;
	for_netslmt_amt: string;
	for_netslmt_qty: string;
	for_netprps_stk_cd: string;
	for_netprps_stk_nm: string;
	for_netprps_amt: string;
	for_netprps_qty: string;
	orgn_netslmt_stk_cd: string;
	orgn_netslmt_stk_nm: string;
	orgn_netslmt_amt: string;
	orgn_netslmt_qty: string;
	orgn_netprps_stk_cd: string;
	orgn_netprps_stk_nm: string;
	orgn_netprps_amt: string;
	orgn_netprps_qty: string;
}

export interface KA90009Response {
	frgnr_orgn_trde_upper: FrgnrOrgnTrdeUpper[];
	return_code: number;
	return_msg: string;
}
