export interface AU10001Response {
	expires_dt: string;
	return_msg: string;
	token_type: string;
	return_code: number;
	token: string;
}

export interface AU10002Response {
	return_msg: string;
	return_code: number;
}
