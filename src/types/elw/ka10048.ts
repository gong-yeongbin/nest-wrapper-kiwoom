// ELW일별민감도지표요청 타입 정의

export interface KA10048Param {
	stk_cd: string; // 종목코드
}

interface ElwdalySnstIx {
	dt: string; // 일자
	iv: string; // IV
	delta: string; // 델타
	gam: string; // 감마
	theta: string; // 쎄타
	vega: string; // 베가
	law: string; // 로
	lp: string; // LP
}

export interface KA10048Response {
	elwdaly_snst_ix: ElwdalySnstIx[];
	return_code: number;
	return_msg: string;
}
