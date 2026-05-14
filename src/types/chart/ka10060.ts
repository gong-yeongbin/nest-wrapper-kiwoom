// 종목별투자자기관별차트 조회 요청/응답 타입 정의

export interface KA10060Param {
	dt: string;
	stk_cd: string;
	amt_qty_tp: string;
	trde_tp: string;
	unit_tp: string;
}

interface StkInvsrOrgnChart {
	dt: string;
	cur_prc: string;
	pred_pre: string;
	acc_trde_prica: string;
	ind_invsr: string;
	frgnr_invsr: string;
	orgn: string;
	fnnc_invt: string;
	insrnc: string;
	invtrt: string;
	etc_fnnc: string;
	bank: string;
	penfnd_etc: string;
	samo_fund: string;
	natn: string;
	etc_corp: string;
	natfor: string;
}

export interface KA10060Response {
	stk_invsr_orgn_chart: StkInvsrOrgnChart[];
	return_code: number;
	return_msg: string;
}
