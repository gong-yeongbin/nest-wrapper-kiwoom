export interface KA10131Param {
	dt: string;
	strt_dt: string;
	end_dt: string;
	mrkt_tp: string;
	netslmt_tp: string;
	stk_inds_tp: string;
	amt_qty_tp: string;
	stex_tp: string;
}

interface OrgnFrgnrContTrdePrst {
	rank: string;
	stk_cd: string;
	stk_nm: string;
	prid_stkpc_flu_rt: string;
	orgn_nettrde_amt: string;
	orgn_nettrde_qty: string;
	orgn_cont_netprps_dys: string;
	orgn_cont_netprps_qty: string;
	orgn_cont_netprps_amt: string;
	frgnr_nettrde_qty: string;
	frgnr_nettrde_amt: string;
	frgnr_cont_netprps_dys: string;
	frgnr_cont_netprps_qty: string;
	frgnr_cont_netprps_amt: string;
	nettrde_qty: string;
	nettrde_amt: string;
	tot_cont_netprps_dys: string;
	tot_cont_nettrde_qty: string;
	tot_cont_netprps_amt: string;
}

export interface KA10131Response {
	orgn_frgnr_cont_trde_prst: OrgnFrgnrContTrdePrst[];
	return_code: number;
	return_msg: string;
}
