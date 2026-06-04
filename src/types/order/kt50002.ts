// 금현물 정정주문 요청/응답 타입 정의

export interface KT50002Param {
	stk_cd: string; // 종목코드 : M04020000 금 99.99_1kg, M04020100 미니금 99.99_100g
	orig_ord_no: string; // 원주문번호
	mdfy_qty: string; // 정정수량
	mdfy_uv: string; // 정정단가
}

export interface KT50002Response {
	ord_no?: string; // 주문번호
	base_orig_ord_no?: string; // 모주문번호
	mdfy_qty?: string; // 정정수량
	return_code: number;
	return_msg: string;
}
