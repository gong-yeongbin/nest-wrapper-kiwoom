export interface KA10005Param {
	stk_cd: string;
}

interface StkDdWkmm {
	date: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	close_pric: string;
	pre: string;
	flu_rt: string;
	trde_qty: string;
	trde_prica: string;
	cntr_str: string;
	for_poss: string;
	for_wght: string;
	for_netprps: string;
	orgn_netprps: string;
	ind_netprps: string;
	frgn: string;
	crd_remn_rt: string;
	prm: string;
}

export interface KA10005Response {
	stk_ddwkmm: StkDdWkmm[];
	return_code: number;
	return_msg: string;
}
