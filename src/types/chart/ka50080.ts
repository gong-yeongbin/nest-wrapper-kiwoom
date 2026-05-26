// 금현물분봉차트조회 요청/응답 타입 정의

export interface KA50080Param {
	stk_cd: string;
	tic_scope: string;
	upd_stkpc_tp?: string;
}

interface GdsMinChartQry {
	cur_prc: string;
	pred_pre: string;
	acc_trde_qty: string;
	trde_qty: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	cntr_tm: string;
	dt: string;
	pred_pre_sig: string;
}

export interface KA50080Response {
	gds_min_chart_qry: GdsMinChartQry[];
	return_code: number;
	return_msg: string;
}
