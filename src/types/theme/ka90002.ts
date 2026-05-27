// 테마구성종목 요청/응답 타입

export interface KA90002Param {
	date_tp: string;
	thema_grp_cd: string;
	stex_tp: string;
}

interface ThemaCompStk {
	stk_cd: string;
	stk_nm: string;
	cur_prc: string;
	flu_sig: string;
	pred_pre: string;
	flu_rt: string;
	acc_trde_qty: string;
	sel_bid: string;
	sel_req: string;
	buy_bid: string;
	buy_req: string;
	dt_prft_rt_n: string;
}

export interface KA90002Response {
	flu_rt: string;
	dt_prft_rt: string;
	thema_comp_stk: ThemaCompStk[];
	return_code: number;
	return_msg: string;
}
