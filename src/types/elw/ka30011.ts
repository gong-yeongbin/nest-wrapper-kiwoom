// ELW근접율요청 타입 정의

export interface KA30011Param {
	stk_cd: string; // 종목코드
}

interface ElwAlaccRt {
	stk_cd: string; // 종목코드
	stk_nm: string; // 종목명
	cur_prc: string; // 현재가
	pre_sig: string; // 대비기호
	pred_pre: string; // 전일대비
	flu_rt: string; // 등락율
	acc_trde_qty: string; // 누적거래량
	alacc_rt: string; // 근접율
}

export interface KA30011Response {
	elwalacc_rt: ElwAlaccRt[];
	return_code: number;
	return_msg: string;
}
