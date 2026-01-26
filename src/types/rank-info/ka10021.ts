export interface KA10021Param {
	mrkt_tp: string;
	trde_tp: string;
	sort_tp: string;
	tm_tp: string;
	trde_qty_tp: string;
	stk_cnd: string;
	stex_tp: string;
}

interface BidReqSdnin {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	int: string;
	now: string;
	sdnin_qty: string;
	sdnin_rt: string;
	tot_buy_qty: string;
}

export interface KA10021Response {
	bid_req_sdnin: BidReqSdnin[];
	return_code: number;
	return_msg: string;
}
