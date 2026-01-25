export interface KA10020Param {
	mrkt_tp: string;
	sort_tp: string;
	trde_qty_tp: string;
	stk_cnd: string;
	crd_cnd: string;
	stex_tp: string;
}

interface BidReqUpper {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	trde_qty: string;
	tot_sel_req: string;
	tot_buy_req: string;
	netprps_req: string;
	buy_rt: string;
}

export interface KA10020Response {
	bid_req_upper: BidReqUpper[];
	return_code: number;
	return_msg: string;
}
