// 테마그룹별 요청/응답 타입

export interface KA90001Param {
	qry_tp: string;
	stk_cd: string;
	date_tp: string;
	thema_nm: string;
	flu_pl_amt_tp: string;
	stex_tp: string;
}

interface ThemaGrp {
	thema_grp_cd: string;
	thema_nm: string;
	stk_num: string;
	flu_sig: string;
	flu_rt: string;
	rising_stk_num: string;
	fall_stk_num: string;
	dt_prft_rt: string;
	main_stk: string;
}

export interface KA90001Response {
	thema_grp: ThemaGrp[];
	return_code: number;
	return_msg: string;
}
