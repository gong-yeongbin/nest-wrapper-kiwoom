// 업종틱차트조회 요청/응답 타입 정의

export interface KA20004Param {
	inds_cd: string;
	tic_scope: string;
}

interface IndsTicChartQry {
	cur_prc: string;
	trde_qty: string;
	cntr_tm: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	pred_pre: string;
	pred_pre_sig: string;
}

export interface KA20004Response {
	inds_cd: string;
	inds_tic_chart_qry: IndsTicChartQry[];
	return_code: number;
	return_msg: string;
}
