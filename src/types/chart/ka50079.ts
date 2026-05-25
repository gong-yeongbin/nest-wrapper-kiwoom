// 금현물틱차트조회 요청/응답 타입 정의

export interface KA50079Param {
	stk_cd: string;
	tic_scope: string;
	upd_stkpc_tp: string;
}

interface GdsTicChartQry {
	cur_prc: string;
	pred_pre: string;
	trde_qty: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	cntr_tm: string;
	dt: string;
	pred_pre_sig: string;
}

export interface KA50079Response {
	gds_tic_chart_qry: GdsTicChartQry[];
	return_code: number;
	return_msg: string;
}
