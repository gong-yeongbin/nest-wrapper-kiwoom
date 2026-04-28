## 응답 지침

- **언어:** 모든 답변과 주석은 **한국어**로 작성해 주세요.
- **스티일:** 핵심 위주로 간결하게 답변하며, 코드 변경 사항이 있을 때는 전체 파일보다는 변경된 부분 위주로 보여주세요.

## 주요 명령어

- **빌드:** `pnpm run build`
- **코드 검사:** `pnpm run lint`
- **코드 포맷팅:** `pnpm run format`

## 타입 시스템 및 명명 규칙

- **API 인터페이스:** API 요청/응답 타입은 반드시 명확하게 정의하며, 파일 상단에 `export`하여 재사용 가능하게 합니다.
- **명명 규칙:** - 요청 파라미터: `[전문번호]Param` (예: `KA01690Param`)
    - 응답 데이터: `[전문번호]Response` (예: `KA01690Response`)
    - 내부 데이터 모델: PascalCase를 사용합니다. (예: `DayBalRt`)
- **필드명 스타일:** 전문 통신 규격에 따라 **snake_case** 또는 약어 형태의 필드명을 그대로 유지합니다. (예: `qry_dt`, `stk_cd`)
- **엄격한 타입 선언:**
    - 금액, 수량 등은 통신 규격상 `string`으로 오더라도 인터페이스에 명확히 명시합니다.
    - 응답 객체에는 항상 공통 필드인 `return_code: number`와 `return_msg: string`을 포함합니다.

## 외부 서비스 연동 정보

- **키움 REST API 가이드:** https://openapi.kiwoom.com/guide/apiguide?dummyVal=0
- **Github Repository:** https://github.com/gong-yeongbin/nest-wrapper-kiwoom