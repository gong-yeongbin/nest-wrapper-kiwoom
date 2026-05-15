// 키움 REST API 호출 실패 시 던지는 커스텀 예외
export class KiwoomApiException extends Error {
	constructor(
		public readonly apiId: string,
		public readonly returnCode: number,
		public readonly returnMsg: string,
	) {
		super(`[${apiId}] ${returnMsg} (return_code: ${returnCode})`);
		this.name = 'KiwoomApiException';
	}
}
