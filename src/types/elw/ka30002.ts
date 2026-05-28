// 거래원별ELW순매매상위요청 타입 정의

export interface KA30002Param {
	isscomp_cd: string; // 발행사코드
	trde_qty_tp: string; // 거래량구분 (0:전체, 5:5천주, 10:만주, 50:5만주, 100:10만주, 500:50만주, 1000:백만주)
	trde_tp: string; // 매매구분 (1:순매수, 2:순매도)
	dt: string; // 기간 (1:전일, 5:5일, 10:10일, 40:40일, 60:60일)
	trde_end_elwskip: string; // 거래종료ELW제외 (0:포함, 1:제외)
}

interface TrdeOriElwnettrdeUpper {
	stk_cd: string; // 종목코드
	stk_nm: string; // 종목명
	stkpc_flu: string; // 주가등락
	flu_rt: string; // 등락율
	trde_qty: string; // 거래량
	netprps: string; // 순매수
	buy_trde_qty: string; // 매수거래량
	sel_trde_qty: string; // 매도거래량
}

export interface KA30002Response {
	trde_ori_elwnettrde_upper: TrdeOriElwnettrdeUpper[];
	return_code: number;
	return_msg: string;
}
