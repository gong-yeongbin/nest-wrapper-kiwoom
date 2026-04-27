export interface KA20003Param {
	inds_cd: string;
}

interface AllIndsIdex {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	wght: string;
	trde_prica: string;
	upl: string;
	rising: string;
	stdns: string;
	fall: string;
	lst: string;
	flo_stk_num: string;
}

export interface KA20003Response {
	all_inds_idex: AllIndsIdex[];
	return_code: number;
	return_msg: string;
}
