export interface KA10078Param {
	mmcm_cd: string;
	stk_cd: string;
	strt_dt: string;
	end_dt: string;
}

interface SecStkTrdeTrend {
	dt: string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	acc_trde_qty: string;
	netprps_qty: string;
	buy_qty: string;
	sell_qty: string;
}

export interface KA10078Response {
	sec_stk_trde_trend: SecStkTrdeTrend[];
	return_code: number;
	return_msg: string;
}
