// ELW조건검색요청 타입 정의

export interface KA30005Param {
	isscomp_cd: string; // 발행사코드
	bsis_aset_cd: string; // 기초자산코드
	rght_tp: string; // 권리구분 (0:전체, 1:콜, 2:풋, 3:DC, 4:DP, 5:EX, 6:조기종료콜, 7:조기종료풋)
	lpcd: string; // LP코드
	sort_tp: string; // 정렬구분 (0:정렬없음, 1:상승율순, 2:상승폭순, 3:하락율순, 4:하락폭순, 5:거래량순, 6:거래대금순, 7:잔존일순)
}

interface ElwcndQry {
	stk_cd: string; // 종목코드
	isscomp_nm: string; // 발행사명
	sqnc: string; // 회차
	base_aset_nm: string; // 기초자산명
	rght_tp: string; // 권리구분
	expr_dt: string; // 만기일
	cur_prc: string; // 현재가
	pre_tp: string; // 대비구분
	pred_pre: string; // 전일대비
	flu_rt: string; // 등락율
	trde_qty: string; // 거래량
	trde_qty_pre: string; // 거래량대비
	trde_prica: string; // 거래대금
	pred_trde_qty: string; // 전일거래량
	sel_bid: string; // 매도호가
	buy_bid: string; // 매수호가
	prty: string; // 패리티
	gear_rt: string; // 기어링비율
	pl_qutr_rt: string; // 손익분기율
	cfp: string; // 자본지지점
	theory_pric: string; // 이론가
	innr_vltl: string; // 내재변동성
	delta: string; // 델타
	lvrg: string; // 레버리지
	exec_pric: string; // 행사가격
	cnvt_rt: string; // 전환비율
	lpposs_rt: string; // LP보유비율
	pl_qutr_pt: string; // 손익분기점
	fin_trde_dt: string; // 최종거래일
	flo_dt: string; // 상장일
	lpinitlast_suply_dt: string; // LP초종공급일
	stk_nm: string; // 종목명
	srvive_dys: string; // 잔존일수
	dispty_rt: string; // 괴리율
	lpmmcm_nm: string; // LP회원사명
	lpmmcm_nm_1: string; // LP회원사명1
	lpmmcm_nm_2: string; // LP회원사명2
	xraymont_cntr_qty_arng_trde_tp: string; // Xray순간체결량정리매매구분
	xraymont_cntr_qty_profa_100tp: string; // Xray순간체결량증거금100구분
}

export interface KA30005Response {
	elwcnd_qry: ElwcndQry[];
	return_code: number;
	return_msg: string;
}
