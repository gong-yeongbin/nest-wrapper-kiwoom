// 장중투자자별매매차트 조회 요청/응답 타입 정의

export interface KA10064Param {
	mrkt_tp: string;
	amt_qty_tp: string;
	trde_tp: string;
	stk_cd: string;
}

interface OpmrInvsrTrdeChart {
	tm: string;
	frgnr_invsr: string;
	orgn: string;
	invtrt: string;
	insrnc: string;
	bank: string;
	penfnd_etc: string;
	etc_corp: string;
	natn: string;
}

export interface KA10064Response {
	opmr_invsr_trde_chart: OpmrInvsrTrdeChart[];
	return_code: number;
	return_msg: string;
}
