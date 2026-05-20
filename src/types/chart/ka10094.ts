// 주식년봉차트조회 요청/응답 타입 정의

export interface KA10094Param {
	stk_cd: string;
	base_dt: string;
	upd_stkpc_tp: string;
}

interface StkYrPoleChartQry {
	cur_prc: string;
	trde_qty: string;
	trde_prica: string;
	dt: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
}

export interface KA10094Response {
	stk_cd: string;
	stk_yr_pole_chart_qry: StkYrPoleChartQry[];
	return_code: number;
	return_msg: string;
}
