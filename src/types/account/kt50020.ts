export interface KT50020Param {}

interface GoldAcntEvltPrst {
	stk_cd: string;
	stk_nm: string;
	real_qty: string;
	avg_prc: string;
	cur_prc: string;
	est_amt: string;
	est_lspft: string;
	est_ratio: string;
	cmsn: string;
	vlad_tax: string;
	book_amt2: string;
	pl_prch_prc: string;
	qty: string;
	buy_qty: string;
	sell_qty: string;
	able_qty: string;
}

export interface KT50020Response {
	tot_entr: string;
	net_entr: string;
	tot_est_amt: string;
	net_amt: string;
	tot_book_amt2: string;
	tot_dep_amt: string;
	paym_alowa: string;
	pl_amt: string;
	gold_acnt_evlt_prst: GoldAcntEvltPrst[];
	return_code: number;
	return_msg: string;
}
