// 투자자별일별매매종목 조회 요청/응답 타입 정의

export interface KA10058Param {
	strt_dt: string;
	end_dt: string;
	trde_tp: string;
	mrkt_tp: string;
	invsr_tp: string;
	stex_tp: string;
}

interface InvsrDalyTrdeStk {
	stk_cd: string;
	stk_nm: string;
	netslmt_qty: string;
	netslmt_amt: string;
	prsm_avg_pric: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	avg_pric_pre: string;
	pre_rt: string;
	dt_trde_qty: string;
}

export interface KA10058Response {
	invsr_daly_trde_stk: InvsrDalyTrdeStk[];
	return_code: number;
	return_msg: string;
}
