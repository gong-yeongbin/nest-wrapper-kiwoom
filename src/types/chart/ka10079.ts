// 주식틱차트조회 요청/응답 타입 정의

export interface KA10079Param {
	stk_cd: string;
	tic_scope: string;
	upd_stkpc_tp: string;
}

interface StkTicChartQry {
	cur_prc: string;
	trde_qty: string;
	cntr_tm: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	pred_pre: string;
	pred_pre_sig: string;
}

export interface KA10079Response {
	stk_cd: string;
	last_tic_cnt: string;
	stk_tic_chart_qry: StkTicChartQry[];
	return_code: number;
	return_msg: string;
}
