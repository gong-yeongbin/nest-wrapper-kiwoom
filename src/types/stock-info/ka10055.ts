// 당일전일체결량 조회 요청/응답 타입 정의

export interface KA10055Param {
	stk_cd: string;
	tdy_pred: string;
}

interface TdyPredCntrQty {
	cntr_tm: string;
	cntr_pric: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	cntr_qty: string;
	acc_trde_qty: string;
	acc_trde_prica: string;
}

export interface KA10055Response {
	tdy_pred_cntr_qty: TdyPredCntrQty[];
	return_code: number;
	return_msg: string;
}
