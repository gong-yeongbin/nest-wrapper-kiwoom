export interface KA10074Param {
	strt_dt: string;
	end_dt: string;
}

interface DtRlztPl {
	dt: string;
	buy_amt: string;
	sell_amt: string;
	tdy_sel_pl: string;
	tdy_trde_cmsn: string;
	tdy_trde_tax: string;
}

export interface KA10074Response {
	tot_buy_amt: string;
	tot_sell_amt: string;
	rlzt_pl: string;
	trde_cmsn: string;
	trde_tax: string;
	dt_rlzt_pl: DtRlztPl[];
	return_code: number;
	return_msg: string;
}
