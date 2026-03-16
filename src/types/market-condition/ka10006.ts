export interface KA10006Param {
	stk_cd: string;
}

export interface KA10006Response {
	date: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	close_pric: string;
	pre: string;
	flu_rt: string;
	trde_qty: string;
	trde_prica: string;
	cntr_str: string;
	return_code: number;
	return_msg: string;
}
