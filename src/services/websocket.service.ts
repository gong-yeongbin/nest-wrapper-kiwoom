// 키움 실시간시세 WebSocket 연결·인증·구독을 공통 관리하는 서비스
import { EventEmitter } from 'events';
import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import WebSocket from 'ws';
import { Oauth2 } from './oauth2.service';
import { KIWOOM_MODULE_OPTIONS } from '@src/kiwoom.constants';
import { KiwoomOptions } from '@src/interfaces';

/** 실시간 등록/해지 요청 시 한 종목·항목 묶음 */
export interface RealtimeRegisterItem {
	item: string[]; // 종목코드 배열 (예: ['005930']). 계좌 실시간(00,04)은 ['']
	type: string[]; // 실시간 TR 배열 (예: ['0B'])
}

/** 서버 → 클라이언트 실시간 데이터 1건 */
export interface RealtimeData {
	type: string; // TR명 (예: '0B')
	name: string; // 실시간 항목명 (예: '주식체결')
	item: string; // 종목코드
	values: Record<string, string>; // FID(숫자키) → 값
}

/** 서버에서 내려오는 메시지 공통 envelope */
export interface RealtimeMessage {
	trnm: 'LOGIN' | 'REG' | 'REMOVE' | 'REAL' | 'PING';
	return_code?: number;
	return_msg?: string;
	data?: RealtimeData[];
}

@Injectable()
export class KiwoomWebSocketService extends EventEmitter {
	private readonly url = 'wss://api.kiwoom.com:10000/api/dostk/websocket';
	private socket?: WebSocket;
	private connecting?: Promise<void>; // 동시 register() 시 connect 중복 방지

	constructor(
		@Inject(KIWOOM_MODULE_OPTIONS) private readonly option: KiwoomOptions,
		private readonly oauth2: Oauth2,
	) {
		super();
	}

	/** 실시간 등록. 첫 호출 시 자동으로 connect + LOGIN 수행 (지연 연결) */
	async register(items: RealtimeRegisterItem[], grpNo = '1', refresh = '1'): Promise<void> {
		await this.ensureConnected();
		this.send({ trnm: 'REG', grp_no: grpNo, refresh, data: items });
	}

	/** 실시간 해지 */
	async remove(items: RealtimeRegisterItem[], grpNo = '1'): Promise<void> {
		await this.ensureConnected();
		this.send({ trnm: 'REMOVE', grp_no: grpNo, data: items });
	}

	/** 연결 정리 */
	disconnect(): void {
		this.socket?.close();
	}

	/** 연결+로그인을 1회만 보장 (이미 됐으면 즉시 통과) */
	private ensureConnected(): Promise<void> {
		if (this.socket?.readyState === WebSocket.OPEN) return Promise.resolve();
		if (this.connecting) return this.connecting;

		this.connecting = new Promise<void>((resolve, reject) => {
			const socket = new WebSocket(this.url);
			this.socket = socket;

			socket.on('open', async () => {
				// LOGIN: Bearer 접두어 없이 순수 토큰만 전송
				const bearer = await this.oauth2.getBearerToken();
				const token = bearer.replace(/^Bearer\s+/i, '');
				this.send({ trnm: 'LOGIN', token });
			});

			socket.on('message', (raw: WebSocket.RawData) => {
				const msg = JSON.parse(raw.toString()) as RealtimeMessage;
				this.handleMessage(msg, resolve, reject);
			});

			socket.on('error', (e) => reject(new InternalServerErrorException(e.message)));
			socket.on('close', () => {
				this.socket = undefined;
				this.connecting = undefined;
				this.emit('close');
			});
		});

		return this.connecting;
	}

	private handleMessage(msg: RealtimeMessage, resolveLogin: () => void, rejectLogin: (e: Error) => void): void {
		switch (msg.trnm) {
			case 'PING':
				// keep-alive: 받은 메시지를 그대로 되돌려줌
				this.send(msg);
				break;
			case 'LOGIN':
				if (msg.return_code === 0) resolveLogin();
				else rejectLogin(new InternalServerErrorException(`LOGIN 실패: ${msg.return_msg}`));
				break;
			case 'REAL':
				// type별로 콜백 호출. msg.data는 여러 종목이 묶여올 수 있음
				for (const d of msg.data ?? []) {
					this.emit(d.type, d); // ws.on('0B', d => ...)
					this.emit('REAL', d); // 전체 수신 구독용
				}
				break;
		}
	}

	private send(payload: object): void {
		this.socket?.send(JSON.stringify(payload));
	}
}
