export interface KA10008Param {
	stk_cd: string;
}
interface StkFrgnr {
	dt: string;
	close_pric: string;
	pred_pre: string;
	trde_qty: string;
	chg_qty: string;
	poss_stkcnt: string;
	wght: string;
	gain_pos_stkcnt: string;
	frgnr_limit: string;
	frgnr_limit_irds: string;
	limit_exh_rt: string;
}

export interface KA10008Response {
	stk_frgnr: StkFrgnr[];
	return_code: number;
	return_msg: string;
}
