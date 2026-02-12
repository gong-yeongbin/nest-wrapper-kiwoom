export interface KA10032Param {
	"mrkt_tp": string;
	"mang_stk_incls": string;
	"stex_tp": string;
}

interface TradePriceUpper {
	"stk_cd": string;
	"now_rank": string;
	"pred_rank": string;
	"stk_nm": string;
	"cur_prc": string;
	"pred_pre_sig": string;
	"pred_pre": string;
	"flu_rt": string;
	"sel_bid": string;
	"buy_bid": string;
	"now_trde_qty": string;
	"pred_trde_qty": string;
	"trde_prica": string;
}

export interface KA10032Response {
	trde_prica_upper: TradePriceUpper[]
	return_code: number;
	return_msg: string;
}
