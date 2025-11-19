export interface KA40002Params {
	stk_cd: string; // 종목코드
}

export interface KA40002Response {
	stk_nm: string;
	etfobjt_idex_nm: string;
	wonju_pric: string;
	etftxon_type: string;
	etntxon_type: string;
	return_code: number;
	return_msg: string;
}
