export interface KA10038Param {
	stk_cd: string;
	strt_dt: string;
	end_dt: string;
	qry_tp: string;
	dt: string;
}

interface StkSecRank {
	rank: string;
	mmcm_nm: string;
	buy_qty: string;
	sell_qty: string;
	acc_netprps_qty: string;
}

export interface KA10038Response {
	rank_1: string;
	rank_2: string;
	rank_3: string;
	prid_trde_qty: string;
	stk_sec_rank: StkSecRank[];
	return_code: number;
	return_msg: string;
}
