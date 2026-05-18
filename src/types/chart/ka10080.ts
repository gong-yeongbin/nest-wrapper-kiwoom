// 주식분봉차트조회 요청/응답 타입 정의

export interface KA10080Param {
	stk_cd: string;
	tic_scope: string;
	upd_stkpc_tp: string;
	base_dt?: string;
}

interface StkMinPoleChartQry {
	cur_prc: string;
	trde_qty: string;
	cntr_tm: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	pred_pre: string;
	pred_pre_sig: string;
}

export interface KA10080Response {
	stk_cd: string;
	stk_min_pole_chart_qry: StkMinPoleChartQry[];
	return_code: number;
	return_msg: string;
}
