// 변동성완화장치발동종목 조회 요청/응답 타입 정의

export interface KA10054Param {
	mrkt_tp: string;
	bf_mkrt_tp: string;
	stk_cd: string;
	motn_tp: string;
	skip_stk: string;
	trde_qty_tp: string;
	min_trde_qty: string;
	max_trde_qty: string;
	trde_prica_tp: string;
	min_trde_prica: string;
	max_trde_prica: string;
	motn_drc: string;
	stex_tp: string;
}

interface MotnStk {
	stk_cd: string;
	stk_nm: string;
	acc_trde_qty: string;
	motn_pric: string;
	dynm_dispty_rt: string;
	trde_cntr_proc_time: string;
	virelis_time: string;
	viaplc_tp: string;
	dynm_stdpc: string;
	static_stdpc: string;
	static_dispty_rt: string;
	open_pric_pre_flu_rt: string;
	vimotn_cnt: string;
	stex_tp: string;
}

export interface KA10054Response {
	motn_stk: MotnStk[];
	return_code: number;
	return_msg: string;
}
