// ELW잔량순위요청 타입 정의

export interface KA30010Param {
	sort_tp: string; // 정렬구분 (1:순매수잔량상위, 2:순매도잔량상위)
	rght_tp: string; // 권리구분 (000:전체, 001:콜, 002:풋, 003:DC, 004:DP, 006:조기종료콜, 007:조기종료풋)
	trde_end_skip: string; // 거래종료제외 (1:거래종료제외, 0:거래종료포함)
}

interface ElwreqRank {
	stk_cd: string; // 종목코드
	rank: string; // 순위
	stk_nm: string; // 종목명
	cur_prc: string; // 현재가
	pre_sig: string; // 대비기호
	pred_pre: string; // 전일대비
	flu_rt: string; // 등락률
	trde_qty: string; // 거래량
	sel_req: string; // 매도잔량
	buy_req: string; // 매수잔량
	netprps_req: string; // 순매수잔량
	trde_prica: string; // 거래대금
}

export interface KA30010Response {
	elwreq_rank: ElwreqRank[];
	return_code: number;
	return_msg: string;
}
