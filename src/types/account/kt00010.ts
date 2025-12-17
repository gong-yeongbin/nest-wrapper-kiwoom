export interface KT00010Param {
	io_amt: string;
	stk_cd: string;
	trde_tp: string;
	trde_qty: string;
	uv: string;
	exp_buy_unp: string;
}

export interface KT00010Response {
	profa_20ord_alow_amt: string;
	profa_20ord_alowq: string;
	profa_30ord_alow_amt: string;
	profa_30ord_alowq: string;
	profa_40ord_alow_amt: string;
	profa_40ord_alowq: string;
	profa_50ord_alow_amt: string;
	profa_50ord_alowq: string;
	profa_60ord_alow_amt: string;
	profa_60ord_alowq: string;
	profa_rdex_60ord_alow_amt: string;
	profa_rdex_60ord_alowq: string;
	profa_100ord_alow_amt: string;
	profa_100ord_alowq: string;
	pred_reu_alowa: string;
	tdy_reu_alowa: string;
	entr: string;
	repl_amt: string;
	uncla: string;
	ord_pos_repl: string;
	ord_alowa: string;
	wthd_alowa: string;
	nxdy_wthd_alowa: string;
	pur_amt: string;
	cmsn: string;
	pur_exct_amt: string;
	d2entra: string;
	profa_rdex_aplc_tp: string;
	return_code: number;
	return_msg: string;
}
