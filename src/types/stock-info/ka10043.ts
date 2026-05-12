// 거래원매물대분석 조회 요청/응답 타입 정의

export interface KA10043Param {
	stk_cd: string;
	strt_dt: string;
	end_dt: string;
	qry_dt_tp: string;
	pot_tp: string;
	dt: string;
	sort_base: string;
	mmcm_cd: string;
	stex_tp: string;
}

interface TrdeOriPrpsAnly {
	dt: string;
	close_pric: string;
	pre_sig: string;
	pred_pre: string;
	sel_qty: string;
	buy_qty: string;
	netprps_qty: string;
	trde_qty_sum: string;
	trde_wght: string;
}

export interface KA10043Response {
	trde_ori_prps_anly: TrdeOriPrpsAnly[];
	return_code: number;
	return_msg: string;
}
