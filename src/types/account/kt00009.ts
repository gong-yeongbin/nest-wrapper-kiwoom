export interface KT00009Param {
	ord_dt: string;
	stk_bond_tp: string;
	mrkt_tp: string;
	sell_tp: string;
	qry_tp: string;
	stk_cd: string;
	fr_ord_no: string;
	dmst_stex_tp: string;
}

interface AcntOrdCntrPrstArray {
	stk_bond_tp: string;
	ord_no: string;
	stk_cd: string;
	trde_tp: string;
	io_tp_nm: string;
	ord_qty: string;
	ord_uv: string;
	cnfm_qty: string;
	rsrv_oppo: string;
	cntr_no: string;
	acpt_tp: string;
	orig_ord_no: string;
	stk_nm: string;
	setl_tp: string;
	crd_deal_tp: string;
	cntr_qty: string;
	cntr_uv: string;
	comm_ord_tp: string;
	mdfy_cncl_tp: string;
	cntr_tm: string;
	dmst_stex_tp: string;
	cond_uv: string;
}

export interface KT00009Response {
	sell_grntl_engg_amt: string;
	buy_engg_amt: string;
	engg_amt: string;
	acnt_ord_cntr_prst_array: AcntOrdCntrPrstArray[];
	return_code: number;
	return_msg: string;
}
