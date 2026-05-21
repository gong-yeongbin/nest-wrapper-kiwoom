// 업종일봉조회 요청/응답 타입 정의

export interface KA20006Param {
	inds_cd: string;
	base_dt: string;
}

interface IndsDtPoleQry {
	cur_prc: string;
	trde_qty: string;
	dt: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	trde_prica: string;
}

export interface KA20006Response {
	inds_cd: string;
	inds_dt_pole_qry: IndsDtPoleQry[];
	return_code: number;
	return_msg: string;
}
