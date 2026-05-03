export interface KA10001Param {
	stk_cd: string;
}

export interface KA10001Response {
	stk_cd: string;
	stk_nm: string;
	setl_mm: string;
	fav: string;
	cap: string;
	flo_stk: string;
	crd_rt: string;
	oyr_hgst: string;
	oyr_lwst: string;
	mac: string;
	mac_wght: string;
	for_exh_rt: string;
	repl_pric: string;
	per: string;
	eps: string;
	roe: string;
	pbr: string;
	ev: string;
	bps: string;
	sale_amt: string;
	bus_pro: string;
	cup_nga: string;
	'250hgst': string;
	'250lwst': string;
	high_pric: string;
	open_pric: string;
	low_pric: string;
	upl_pric: string;
	lst_pric: string;
	base_pric: string;
	exp_cntr_pric: string;
	exp_cntr_qty: string;
	'250hgst_pric_dt': string;
	'250hgst_pric_pre_rt': string;
	'250lwst_pric_dt': string;
	'250lwst_pric_pre_rt': string;
	cur_prc: string;
	pre_sig: string;
	pred_pre: string;
	flu_rt: string;
	trde_qty: string;
	trde_pre: string;
	fav_unit: string;
	dstr_stk: string;
	dstr_rt: string;
	return_code: number;
	return_msg: string;
}
