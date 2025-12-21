export interface KT00012Param {
	stk_cd: string;
	uv: string;
}

export interface KT00012Response {
	stk_assr_rt: string;
	stk_assr_rt_nm: string;
	assr_30ord_alow_amt: string;
	assr_30ord_alowq: string;
	assr_30pred_reu_amt: string;
	assr_30tdy_reu_amt: string;
	assr_40ord_alow_amt: string;
	assr_40ord_alowq: string;
	assr_40pred_reu_amt: string;
	assr_40tdy_reu_amt: string;
	assr_50ord_alow_amt: string;
	assr_50ord_alowq: string;
	assr_50pred_reu_amt: string;
	assr_50tdy_reu_amt: string;
	assr_60ord_alow_amt: string;
	assr_60ord_alowq: string;
	assr_60pred_reu_amt: string;
	assr_60tdy_reu_amt: string;
	entr: string;
	repl_amt: string;
	uncla: string;
	ord_pos_repl: string;
	ord_alowa: string;
	out_alowa: string;
	out_pos_qty: string;
	min_amt: string;
	min_qty: string;
	return_code: number;
	return_msg: string;
}
