# API 구현

$ARGUMENTS 전문번호에 해당하는 키움 REST API를 구현한다.

## 순서

1. `키움 REST API 문서.xlsx` 에서 $ARGUMENTS 시트를 찾아 Request/Response 스펙을 파악한다.
2. `.claude/issue_guide.md` 규칙에 따라 GitHub issue를 `gh` CLI로 생성한다.
3. GitHub issue에서 `gh issue develop {issue_number} --name feat/{전문번호소문자} --base main --checkout` 명령으로 branch를 생성하고 checkout한다.
4. `./CLAUDE.md` 파일 생성 네이밍 규칙을 참고해 해당 API의 타입 디렉터리(`src/types/{도메인}/`)와 서비스 파일(`src/services/{도메인}.service.ts`)이 존재하는지 확인한다. 없으면 네이밍 규칙에 따라 디렉터리 및 파일을 먼저 생성한다.
5. 기존 타입 파일 패턴을 참고해 타입 파일(`src/types/{도메인}/$ARGUMENTS.ts`)을 생성한다.
6. `src/types/{도메인}/index.ts` 에 export를 추가한다.
7. `src/services/{도메인}.service.ts` 에 서비스 메서드를 추가한다.
8. `pnpm run build` 로 빌드 검증한다.
9. `.claude/commit-convention.md` 규칙에 따라 커밋 메시지를 작성하고 커밋한다.
10. 원격 브랜치에 push한다.
11. `gh pr create --base main --title "{전문번호소문자}_{한국어_API명}" --body "Resolves: #{issue_number}"` 로 PR을 생성한다.

## 제약

- 위 순서 외의 동작은 절대 수행하지 않는다.
- 순서에 없는 파일 수정, 추가 리팩토링, 불필요한 개선 등은 하지 않는다.
