// 주식 취소주문 요청/응답 타입 정의

export interface KT10003Param {
	dmst_stex_tp: string; // 국내거래소구분 : KRX, NXT, SOR
	orig_ord_no: string; // 원주문번호
	stk_cd: string; // 종목코드
	cncl_qty: string; // 취소수량 : '0' 입력시 잔량 전부 취소
}

export interface KT10003Response {
	ord_no?: string; // 주문번호
	base_orig_ord_no?: string; // 모주문번호
	cncl_qty?: string; // 취소수량
	return_code: number;
	return_msg: string;
}
