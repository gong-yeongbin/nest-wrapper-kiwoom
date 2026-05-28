// ELW괴리율요청 타입 정의

export interface KA30004Param {
	isscomp_cd: string; // 발행사코드
	bsis_aset_cd: string; // 기초자산코드
	rght_tp: string; // 권리구분 (000:전체, 001:콜, 002:풋, 003:DC, 004:DP, 005:EX, 006:조기종료콜, 007:조기종료풋)
	lpcd: string; // LP코드
	trde_end_elwskip: string; // 거래종료ELW제외 (1:제외, 0:포함)
}

interface ElwdisptyRt {
	stk_cd: string; // 종목코드
	isscomp_nm: string; // 발행사명
	sqnc: string; // 회차
	base_aset_nm: string; // 기초자산명
	rght_tp: string; // 권리구분
	dispty_rt: string; // 괴리율
	basis: string; // 베이시스
	srvive_dys: string; // 잔존일수
	theory_pric: string; // 이론가
	cur_prc: string; // 현재가
	pre_tp: string; // 대비구분
	pred_pre: string; // 전일대비
	flu_rt: string; // 등락율
	trde_qty: string; // 거래량
	stk_nm: string; // 종목명
}

export interface KA30004Response {
	elwdispty_rt: ElwdisptyRt[];
	return_code: number;
	return_msg: string;
}
