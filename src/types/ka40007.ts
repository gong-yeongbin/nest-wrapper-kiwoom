export interface KA40007Param {
	stk_cd: string; // 종목코드
}

interface EtftislCntrArray {
	cntr_tm: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	trde_qty: string;
	stex_tp: string;
}

export interface KA40007Response {
	stk_cls: string;
	stk_nm: string;
	etfobjt_idex_nm: string;
	etfobjt_idex_cd: string;
	objt_idex_pre_rt: string;
	wonju_pric: string;
	etftisl_cntr_array: EtftislCntrArray[];
	return_code: number;
	return_msg: string;
}
