// 업종년봉조회 요청/응답 타입 정의

export interface KA20019Param {
	inds_cd: string;
	base_dt: string;
}

interface IndsYrPoleQry {
	cur_prc: string;
	trde_qty: string;
	dt: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	trde_prica: string;
}

export interface KA20019Response {
	inds_cd: string;
	inds_yr_pole_qry: IndsYrPoleQry[];
	return_code: number;
	return_msg: string;
}
