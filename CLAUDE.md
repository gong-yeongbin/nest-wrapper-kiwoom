## 응답 지침

- **언어:** 모든 답변과 주석은 **한국어**로 작성해 주세요.
- **스티일:** 핵심 위주로 간결하게 답변하며, 코드 변경 사항이 있을 때는 전체 파일보다는 변경된 부분 위주로 보여주세요.

## 주요 명령어

- **빌드:** `pnpm run build`
- **코드 검사:** `pnpm run lint`
- **코드 포맷팅:** `pnpm run format`

## 파일 생성 네이밍 규칙

서비스 파일과 타입 디렉터리는 키움 REST API의 URL 경로 마지막 세그먼트를 기준으로 네이밍합니다.

| API URL 경로 | 서비스 파일명 | 타입 디렉터리명 |
|-------------|-------------|--------------|
| `/api/dostk/acnt` | `account.service.ts` | `types/account/` |
| `/api/dostk/etf` | `etf.service.ts` | `types/etf/` |
| `/api/dostk/stkinfo` | `stock-info.service.ts` | `types/stock-info/` |
| `/api/dostk/mrkcond` | `market-condition.service.ts` | `types/market-condition/` |
| `/api/dostk/shsa` | `shortSale.service.ts` | `types/shortSale/` |
| `/api/dostk/rkinfo` | `rank-info.service.ts` | `types/rank-info/` |
| `/api/dostk/sect` | `sector.service.ts` | `types/sector/` |
| `/api/dostk/frgnistt` | `foreign-institutional.service.ts` | `types/foreign-institutional/` |
| `/api/dostk/slb` | `securities-lending-borrowing.service.ts` | `types/securities-lending-borrowing/` |
| `/api/dostk/crdordr` | `credit-order.service.ts` | `types/credit-order/` |

- URL 세그먼트가 축약어(예: `acnt`, `stkinfo`)인 경우 의미가 명확한 영단어로 풀어씁니다.
- 서비스 파일명과 타입 디렉터리명은 항상 동일한 이름을 사용합니다.
- 타입 파일명은 전문번호 소문자 그대로 사용합니다. (예: `ka10001.ts`, `kt10006.ts`)

## 외부 서비스 연동 정보

- **키움 REST API 가이드:** https://openapi.kiwoom.com/guide/apiguide?dummyVal=0
- **Github Repository:** https://github.com/gong-yeongbin/nest-wrapper-kiwoom