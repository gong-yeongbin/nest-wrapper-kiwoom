export interface KA90007Param {
	date: string;
	amt_qty_tp: string;
	mrkt_tp: string;
	stex_tp: string;
}

interface PrmTrdeAccTrnsn {
	dt: string;
	kospi200: string;
	basis: string;
	dfrt_trde_tdy: string;
	dfrt_trde_acc: string;
	ndiffpro_trde_tdy: string;
	ndiffpro_trde_acc: string;
	all_tdy: string;
	all_acc: string;
}

export interface KA90007Response {
	prm_trde_acc_trnsn: PrmTrdeAccTrnsn[];
	return_code: number;
	return_msg: string;
}
