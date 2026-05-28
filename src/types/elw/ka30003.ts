// ELWLP보유일별추이요청 타입 정의

export interface KA30003Param {
	bsis_aset_cd: string; // 기초자산코드
	base_dt: string; // 기준일자 (YYYYMMDD)
}

interface ElwlppossDalyTrnsn {
	dt: string; // 일자
	cur_prc: string; // 현재가
	pre_tp: string; // 대비구분
	pred_pre: string; // 전일대비
	flu_rt: string; // 등락율
	trde_qty: string; // 거래량
	trde_prica: string; // 거래대금
	chg_qty: string; // 변동수량
	lprmnd_qty: string; // LP보유수량
	wght: string; // 비중
}

export interface KA30003Response {
	elwlpposs_daly_trnsn: ElwlppossDalyTrnsn[];
	return_code: number;
	return_msg: string;
}
