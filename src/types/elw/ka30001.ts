// ELW가격급등락요청 타입 정의

export interface KA30001Param {
	flu_tp: string; // 등락구분 (1:급등, 2:급락)
	tm_tp: string; // 시간구분 (1:분전, 2:일전)
	tm: string; // 시간 (분 혹은 일입력)
	trde_qty_tp: string; // 거래량구분
	isscomp_cd: string; // 발행사코드
	bsis_aset_cd: string; // 기초자산코드
	rght_tp: string; // 권리구분
	lpcd: string; // LP코드
	trde_end_elwskip: string; // 거래종료ELW제외 (0:포함, 1:제외)
}

interface ElwpricJmpflu {
	stk_cd: string; // 종목코드
	rank: string; // 순위
	stk_nm: string; // 종목명
	pre_sig: string; // 대비기호
	pred_pre: string; // 전일대비
	trde_end_elwbase_pric: string; // 거래종료ELW기준가
	cur_prc: string; // 현재가
	base_pre: string; // 기준대비
	trde_qty: string; // 거래량
	jmp_rt: string; // 급등율
}

export interface KA30001Response {
	base_pric_tm: string; // 기준가시간
	elwpric_jmpflu: ElwpricJmpflu[];
	return_code: number;
	return_msg: string;
}
