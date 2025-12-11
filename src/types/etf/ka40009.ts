export interface KA40009Param {
	stk_cd: string; // 종목코드
}

export interface Etfnavarray {
	nav: string;
	navpred_pre: string;
	navflu_rt: string;
	trace_eor_rt: string;
	dispty_rt: string;
	stkcnt: string;
	base_pric: string;
	for_rmnd_qty: string;
	repl_pric: string;
	conv_pric: string;
	drstk: string;
	wonju_pric: string;
}

export interface KA40009Response {
	etfnavarray: Etfnavarray[];
	return_code: number;
	return_msg: string;
}
