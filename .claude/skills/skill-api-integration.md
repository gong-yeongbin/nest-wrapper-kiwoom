# API 구현

$ARGUMENTS 전문번호에 해당하는 키움 REST API를 구현한다.

## 순서

1. `키움 REST API 문서.xlsx` 에서 $ARGUMENTS 시트를 찾아 Request/Response 스펙을 파악한다.
2. `.claude/issue_guide.md` 규칙에 따라 GitHub issue를 `gh` CLI로 생성한다.
3. `.claude/issue_guide.md` 규칙에 따라 `main` 기준으로 branch를 생성하고 checkout한다.
4. 기존 `src/types/stock-info/` 파일 패턴을 참고해 타입 파일(`src/types/stock-info/$ARGUMENTS.ts`)을 생성한다.
5. `src/types/stock-info/index.ts` 에 export를 추가한다.
6. `src/services/stock-info.service.ts` 에 서비스 메서드를 추가한다.
7. `pnpm run build` 로 빌드 검증한다.
