// 주식월봉차트조회 요청/응답 타입 정의

export interface KA10083Param {
	stk_cd: string;
	base_dt: string;
	upd_stkpc_tp: string;
}

interface StkMthPoleChartQry {
	cur_prc: string;
	trde_qty: string;
	trde_prica: string;
	dt: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	pred_pre: string;
	pred_pre_sig: string;
	trde_tern_rt: string;
}

export interface KA10083Response {
	stk_cd: string;
	stk_mth_pole_chart_qry: StkMthPoleChartQry[];
	return_code: number;
	return_msg: string;
}
