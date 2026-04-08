export interface KA90005Param {
	date: string;
	amt_qty_tp: string;
	mrkt_tp: string;
	min_tic_tp: string;
	stex_tp: string;
}

interface PrmTrdeTrnsn {
	cntr_tm: string;
	dfrt_trde_sel: string;
	dfrt_trde_buy: string;
	dfrt_trde_netprps: string;
	ndiffpro_trde_sel: string;
	ndiffpro_trde_buy: string;
	ndiffpro_trde_netprps: string;
	dfrt_trde_sell_qty: string;
	dfrt_trde_buy_qty: string;
	dfrt_trde_netprps_qty: string;
	ndiffpro_trde_sell_qty: string;
	ndiffpro_trde_buy_qty: string;
	ndiffpro_trde_netprps_qty: string;
	all_sel: string;
	all_buy: string;
	all_netprps: string;
	kospi200: string;
	basis: string;
}

export interface KA90005Response {
	prm_trde_trnsn: PrmTrdeTrnsn[];
	return_code: number;
	return_msg: string;
}
