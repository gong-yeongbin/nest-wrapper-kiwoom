export interface KA10010Param {
	stk_cd: string;
}

export interface KA10010Response {
	dfrt_trst_sell_qty: string;
	dfrt_trst_sell_amt: string;
	dfrt_trst_buy_qty: string;
	dfrt_trst_buy_amt: string;
	dfrt_trst_netprps_qty: string;
	dfrt_trst_netprps_amt: string;
	ndiffpro_trst_sell_qty: string;
	ndiffpro_trst_sell_amt: string;
	ndiffpro_trst_buy_qty: string;
	ndiffpro_trst_buy_amt: string;
	ndiffpro_trst_netprps_qty: string;
	ndiffpro_trst_netprps_amt: string;
	all_dfrt_trst_sell_qty: string;
	all_dfrt_trst_sell_amt: string;
	all_dfrt_trst_buy_qty: string;
	all_dfrt_trst_buy_amt: string;
	all_dfrt_trst_netprps_qty: string;
	all_dfrt_trst_netprps_amt: string;
	return_code: number;
	return_msg: string;
}
