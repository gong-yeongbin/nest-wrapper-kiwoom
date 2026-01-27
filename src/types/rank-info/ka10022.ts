export interface KA10022Param {
	mrkt_tp: string;
	rt_tp: string;
	tm_tp: string;
	trde_qty_tp: string;
	stk_cnd: string;
	stex_tp: string;
}

interface ReqRtSdnin {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	int: string;
	now_rt: string;
	sdnin_rt: string;
	tot_sel_req: string;
	tot_buy_req: string;
}

export interface KA10022Response {
	req_rt_sdnin: ReqRtSdnin[];
	return_code: number;
	return_msg: string;
}
