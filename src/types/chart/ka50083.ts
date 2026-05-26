// 금현물월봉차트조회 요청/응답 타입 정의

export interface KA50083Param {
	stk_cd: string;
	base_dt: string;
	upd_stkpc_tp: string;
}

interface GdsMonthChartQry {
	cur_prc: string;
	acc_trde_qty: string;
	acc_trde_prica: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	dt: string;
}

export interface KA50083Response {
	gds_month_chart_qry: GdsMonthChartQry[];
	return_code: number;
	return_msg: string;
}
