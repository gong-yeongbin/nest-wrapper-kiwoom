# services/ 디렉터리 가이드

## 새 서비스 추가 패턴

### 1. 기본 골격

```typescript
// 한 줄짜리 한국어 주석
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Oauth2 } from '@services/oauth2.service';
import { BaseApiService } from './base-api.service';
import { KAXXXXXParam, KAXXXXXResponse } from '@src/types';

@Injectable()
export class XxxService extends BaseApiService {
  protected readonly url = '/api/dostk/xxx';

  constructor(httpService: HttpService, oauth2: Oauth2) {
    super(httpService, oauth2);
  }

  async kaXXXXX(params: KAXXXXXParam): Promise<KAXXXXXResponse> {
    return this.executeApiCall<KAXXXXXParam, KAXXXXXResponse>('kaXXXXX', params);
  }
}
```

### 2. 반드시 지켜야 할 규칙

- `BaseApiService`를 상속할 것. `domain`, `baseHeaders`, `executeApiCall`을 직접 선언하지 않는다.
- `protected readonly url`에 키움 REST API 문서의 URL 경로 세그먼트를 지정할 것.
- `executeApiCall` 제네릭 메서드를 통해 API 호출할 것 (개별 axios 호출 금지).
- 공개 메서드 시그니처는 `async methodName(params: KAXXXXXParam): Promise<KAXXXXXResponse>` 형태.
- 타입은 반드시 `@src/types`에서 import.
- 서비스 파일 상단에 한 줄짜리 한국어 주석 필수.
- 새 서비스는 `src/services/index.ts`에 re-export 추가.
