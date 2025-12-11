export interface KA40004Param {
	txon_type: string;
	navpre: string;
	mngmcomp: string;
	txon_yn: string;
	trace_idex: string;
	stex_tp: string;
}

export const ka40004ParamsDefault: KA40004Param = {
	txon_type: '0',
	navpre: '0',
	mngmcomp: '0000',
	txon_yn: '0',
	trace_idex: '0',
	stex_tp: '3',
};

interface EtfallMrprItem {
	stk_cd: string;
	stk_cls: string;
	stk_nm: string;
	close_pric: string;
	pre_sig: string;
	pred_pre: string;
	pre_rt: string;
	trde_qty: string;
	nav: string;
	trace_eor_rt: string;
	txbs: string;
	dvid_bf_base: string;
	pred_dvida: string;
	trace_idex_nm: string;
	drng: string;
	trace_idex_cd: string;
	trace_idex: string;
	trace_flu_rt: string;
}

export interface KA40004Response {
	etfall_mrpr: EtfallMrprItem[];
	return_code: number;
	return_msg: string;
}
