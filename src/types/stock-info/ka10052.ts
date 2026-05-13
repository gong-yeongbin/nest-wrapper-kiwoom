// 거래원순간거래량 조회 요청/응답 타입 정의

export interface KA10052Param {
	mmcm_cd: string;
	stk_cd: string;
	mrkt_tp: string;
	qty_tp: string;
	pric_tp: string;
	stex_tp: string;
}

interface TrdeOriMontTrdeQty {
	tm: string;
	stk_cd: string;
	stk_nm: string;
	trde_ori_nm: string;
	tp: string;
	mont_trde_qty: string;
	acc_netprps: string;
	cur_prc: string;
	pred_pre_sig: string;
	pred_pre: string;
	flu_rt: string;
}

export interface KA10052Response {
	trde_ori_mont_trde_qty: TrdeOriMontTrdeQty[];
	return_code: number;
	return_msg: string;
}
