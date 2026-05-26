// 금현물일봉차트조회 요청/응답 타입 정의

export interface KA50081Param {
	stk_cd: string;
	base_dt: string;
	upd_stkpc_tp: string;
}

interface GdsDayChartQry {
	cur_prc: string;
	acc_trde_qty: string;
	acc_trde_prica: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	dt: string;
	pred_pre_sig: string;
}

export interface KA50081Response {
	gds_day_chart_qry: GdsDayChartQry[];
	return_code: number;
	return_msg: string;
}
