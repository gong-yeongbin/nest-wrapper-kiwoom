export interface KA00198Param {
	qry_tp: string;
}

interface ItemInqRank {
	stk_nm: string;
	bigd_rank: string;
	rank_chg: string;
	rank_chg_sign: string;
	past_curr_prc: string;
	base_comp_sign: string;
	base_comp_chgr: string;
	prev_base_sign: string;
	prev_base_chgr: string;
	dt: string;
	tm: string;
	stk_cd: string;
}

export interface KA00198Response {
	item_inq_rank: ItemInqRank[];
	return_code: number;
	return_msg: string;
}
