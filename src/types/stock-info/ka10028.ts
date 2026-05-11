// 시가대비등락률 조회 요청/응답 타입 정의

export interface KA10028Param {
	sort_tp: string;
	trde_qty_cnd: string;
	mrkt_tp: string;
	updown_incls: string;
	stk_cnd: string;
	crd_cnd: string;
	trde_prica_cnd: string;
	flu_cnd: string;
	stex_tp: string;
}

interface OpenPricPreFluRt {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	open_pric_pre: string;
	now_trde_qty: string;
	cntr_str: string;
}

export interface KA10028Response {
	open_pric_pre_flu_rt: OpenPricPreFluRt[];
	return_code: number;
	return_msg: string;
}
