// ELW민감도지표요청 타입 정의

export interface KA10050Param {
	stk_cd: string; // 종목코드
}

interface ElwsnstIxArray {
	cntr_tm: string; // 체결시간
	cur_prc: string; // 현재가
	elwtheory_pric: string; // ELW이론가
	iv: string; // IV
	delta: string; // 델타
	gam: string; // 감마
	theta: string; // 쎄타
	vega: string; // 베가
	law: string; // 로
	lp: string; // LP
}

export interface KA10050Response {
	elwsnst_ix_array: ElwsnstIxArray[];
	return_code: number;
	return_msg: string;
}
