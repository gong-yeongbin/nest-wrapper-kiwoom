# services/ 디렉터리 가이드

## 새 서비스 추가 패턴

### 1. 기본 골격

```typescript
@Injectable()
export class XxxService implements OnModuleInit {
  private readonly domain = 'https://api.kiwoom.com';
  private readonly baseHeaders: Record<string, string> = {
    'Content-Type': 'application/json;charset=UTF-8',
    'cont-yn': 'N',
    'next-key': 'N',
  };

  constructor(
    private readonly httpService: HttpService,
    private readonly oauth2Service: Oauth2Service,
  ) {}

  async onModuleInit() {
    this.baseHeaders['authorization'] = await this.oauth2Service.getBearerToken();
  }

  private async executeApiCall<TParam, TResponse>(
    apiId: string,
    params: TParam,
  ): Promise<TResponse> {
    try {
      const response = await this.httpService.axiosRef.post<TResponse>(
        `${this.domain}/api/dostk/xxx`,
        params,
        { headers: { ...this.baseHeaders, 'api-id': apiId } },
      );
      return response.data;
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async kaXXXXX(params: KAXXXXXParam): Promise<KAXXXXXResponse> {
    return this.executeApiCall<KAXXXXXParam, KAXXXXXResponse>('kaXXXXX', params);
  }
}
```

### 2. 반드시 지켜야 할 규칙

- `executeApiCall` 제네릭 메서드를 통해 API 호출할 것 (개별 axios 호출 금지).
- 공개 메서드 시그니처는 `async methodName(params: KAXXXXXParam): Promise<KAXXXXXResponse>` 형태.
- 타입은 반드시 `@src/types`에서 import.
- 서비스 파일 상단에 한 줄짜리 한국어 주석 필수.
- 새 서비스는 `src/services/index.ts`에 re-export 추가.
