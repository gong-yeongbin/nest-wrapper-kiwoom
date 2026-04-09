export interface KA90006Param {
	date: string;
	stex_tp: string;
}

interface PrmTrdeDfrtRemnTrnsn {
	dt: string;
	buy_dfrt_trde_qty: string;
	buy_dfrt_trde_amt: string;
	buy_dfrt_trde_irds_amt: string;
	sel_dfrt_trde_qty: string;
	sel_dfrt_trde_amt: string;
	sel_dfrt_trde_irds_amt: string;
}

export interface KA90006Response {
	prm_trde_dfrt_remn_trnsn: PrmTrdeDfrtRemnTrnsn[];
	return_code: number;
	return_msg: string;
}
