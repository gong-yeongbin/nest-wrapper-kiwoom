export interface KA10009Param {
	stk_cd: string;
}

export interface KA10009Response {
	date: string;
	close_pric: string;
	pre: string;
	orgn_dt_acc: string;
	orgn_daly_nettrde: string;
	frgnr_daly_nettrde: string;
	frgnr_qota_rt: string;
	return_code: number;
	return_msg: string;
}
