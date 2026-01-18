export interface KA52301Param {}

interface InveTradStat {
	all_dfrt_trst_sell_qty: string;
	sell_qty_irds: string;
	all_dfrt_trst_sell_amt: string;
	sell_amt_irds: string;
	all_dfrt_trst_buy_qty: string;
	buy_qty_irds: string;
	all_dfrt_trst_buy_amt: string;
	buy_amt_irds: string;
	all_dfrt_trst_netprps_qty: string;
	netprps_qty_irds: string;
	all_dfrt_trst_netprps_amt: string;
	netprps_amt_irds: string;
	sell_uv: string;
	buy_uv: string;
	stk_nm: string;
	acc_netprps_amt: string;
	acc_netprps_qty: string;
	stk_cd: string;
}

export interface KA52301Response {
	inve_trad_stat: InveTradStat[];
	return_code: number;
	return_msg: string;
}
