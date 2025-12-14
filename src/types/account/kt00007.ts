export interface KT00007Param {
	ord_dt: string;
	qry_tp: string;
	stk_bond_tp: string;
	sell_tp: string;
	stk_cd: string;
	fr_ord_no: string;
	dmst_stex_tp: string;
}

interface AcntOrdCntrPrpsDtl {
	ord_no: string;
	stk_cd: string;
	trde_tp: string;
	crd_tp: string;
	ord_qty: string;
	ord_uv: string;
	cnfm_qty: string;
	acpt_tp: string;
	rsrv_tp: string;
	ord_tm: string;
	ori_ord: string;
	stk_nm: string;
	io_tp_nm: string;
	loan_dt: string;
	cntr_qty: string;
	cntr_uv: string;
	ord_remnq: string;
	comm_ord_tp: string;
	mdfy_cncl: string;
	cnfm_tm: string;
	dmst_stex_tp: string;
	cond_uv: string;
}

export interface KT00007Response {
	acnt_ord_cntr_prps_dtl: AcntOrdCntrPrpsDtl[];
	return_code: number;
	return_msg: string;
}
