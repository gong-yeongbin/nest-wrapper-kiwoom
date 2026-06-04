// 금현물 매수주문 요청/응답 타입 정의

export interface KT50000Param {
	stk_cd: string; // 종목코드 : M04020000 금 99.99_1kg, M04020100 미니금 99.99_100g
	ord_qty: string; // 주문수량
	ord_uv?: string; // 주문단가
	trde_tp: string; // 매매구분 : 00:보통, 10:보통(IOC), 20:보통(FOK)
}

export interface KT50000Response {
	ord_no?: string; // 주문번호
	return_code: number;
	return_msg: string;
}
