export interface KT50075Param {
	ord_dt: string;
	qry_tp: string;
	mrkt_deal_tp: string;
	stk_bond_tp: string;
	sell_tp: string;
	stk_cd: string;
	fr_ord_no: string;
	dmst_stex_tp: string;
}

export interface AcntOrdOsoPrst {
	stk_bond_tp: string;
	ord_no: string;
	stk_cd: string;
	trde_tp: string;
	io_tp_nm: string;
	ord_qty: string;
	ord_uv: string;
	cnfm_qty: string;
	data_send_end_tp: string;
	mrkt_deal_tp: string;
	rsrv_tp: string;
	orig_ord_no: string;
	stk_nm: string;
	dcd_tp_nm: string;
	crd_deal_tp: string;
	cntr_qty: string;
	cntr_uv: string;
	ord_remnq: string;
	comm_ord_tp: string;
	mdfy_cncl_tp: string;
	dmst_stex_tp: string;
	cond_uv: string;
}

export interface KT50075Response {
	acnt_ord_oso_prst: AcntOrdOsoPrst[];
	return_code: number;
	return_msg: string;
}
