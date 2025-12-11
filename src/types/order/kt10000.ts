export interface KT10000Param {
	dmst_stex_tp: string; // 국내거래소구분	: KRX,NXT,SOR
	stk_cd: string; // 종목코드
	ord_qty: string; // 주문수량
	ord_uv?: string; // 주문단가
	trde_tp: string; // 매매구분 : 0:보통, 3:시장가, 5:조건부지정가, 81:장마감후시간외, 61:장시작전시간외, 62:시간외단일가, 6:최유리지정가, 7:최우선지정가, 10:보통(IOC), 13:시장가(IOC), 16:최유리(IOC), 20:보통(FOK), 23:시장가(FOK), 26:최유리(FOK), 28:스톱지정가,29:중간가,30:중간가(IOC),31:중간가(FOK)
	cond_uv?: string; // 조건단가
}

export interface KT10000Response {
	ord_no?: string;
	return_code: number;
	return_msg: string;
}
