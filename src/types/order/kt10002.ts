// 주식 정정주문 요청/응답 타입 정의

export interface KT10002Param {
	dmst_stex_tp: string; // 국내거래소구분 : KRX, NXT, SOR
	orig_ord_no: string; // 원주문번호
	stk_cd: string; // 종목코드
	mdfy_qty: string; // 정정수량
	mdfy_uv: string; // 정정단가
	mdfy_cond_uv?: string; // 정정조건단가
}

export interface KT10002Response {
	ord_no?: string; // 주문번호
	base_orig_ord_no?: string; // 모주문번호
	mdfy_qty?: string; // 정정수량
	dmst_stex_tp?: string; // 국내거래소구분
	return_code: number;
	return_msg: string;
}
