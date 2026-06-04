// 금현물 취소주문 요청/응답 타입 정의

export interface KT50003Param {
	orig_ord_no: string; // 원주문번호
	stk_cd: string; // 종목코드 : M04020000 금 99.99_1kg, M04020100 미니금 99.99_100g
	cncl_qty: string; // 취소수량 : '0' 입력시 잔량 전부 취소
}

export interface KT50003Response {
	ord_no?: string; // 주문번호
	base_orig_ord_no?: string; // 모주문번호
	cncl_qty?: string; // 취소수량
	return_code: number;
	return_msg: string;
}
