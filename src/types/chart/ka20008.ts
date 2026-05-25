// 업종월봉조회 요청/응답 타입 정의

export interface KA20008Param {
	inds_cd: string;
	base_dt: string;
}

interface IndsMthPoleQry {
	cur_prc: string;
	trde_qty: string;
	dt: string;
	open_pric: string;
	high_pric: string;
	low_pric: string;
	trde_prica: string;
}

export interface KA20008Response {
	inds_cd: string;
	inds_mth_pole_qry: IndsMthPoleQry[];
	return_code: number;
	return_msg: string;
}
