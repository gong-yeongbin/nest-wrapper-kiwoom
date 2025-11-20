export interface KA40001Param {
	stk_cd: string; // 종목코드
	etfobjt_idex_cd: string; // ETF대상지수코드
	dt: string; // 기간
}

interface EtfprftRtLst {
	etfprft_rt: string;
	cntr_prft_rt: string;
	for_netprps_qty: string;
	orgn_netprps_qty: string;
}

export interface KA40001Response {
	etfprft_rt_lst: EtfprftRtLst[];
	return_code: number;
	return_msg: string;
}
