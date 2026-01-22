export interface KA90012Param {
	dt: string;
	mrkt_tp: string;
}

interface DbrtTrdePrps {
	stk_nm: string;
	stk_cd: string;
	dbrt_trde_cntrcnt: string;
	dbrt_trde_rpy: string;
	rmnd: string;
	remn_amt: string;
}

export interface KA90012Response {
	dbrt_trde_prps: DbrtTrdePrps[];
	return_code: number;
	return_msg: string;
}
