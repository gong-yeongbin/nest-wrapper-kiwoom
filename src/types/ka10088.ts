export interface KA10088Param {
	ord_no: string;
}

interface Osop {
	stk_cd: string;
	acnt_no: string;
	stk_nm: string;
	ord_no: string;
	ord_qty: string;
	ord_pric: string;
	osop_qty: string;
	io_tp_nm: string;
	trde_tp: string;
	sell_tp: string;
	cntr_qty: string;
	ord_stt: string;
	cur_prc: string;
	stex_tp: string;
	stex_tp_txt: string;
}

export interface KA10088Response {
	osop: Osop[];
	return_code: number;
	return_msg: string;
}
