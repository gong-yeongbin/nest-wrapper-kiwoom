# API 구현

$ARGUMENTS 는 공백으로 구분된 전문번호 목록이다. (예: `ka10001 ka10002 ka10003`)
전문번호가 하나여도 동일한 절차를 따른다.

## 순서

1. `키움 REST API 문서.xlsx` 에서 각 전문번호 시트를 찾아 Request/Response 스펙을 파악한다.
2. `.claude/issue_guide.md` 규칙에 따라 각 전문번호마다 GitHub issue를 `gh` CLI로 생성한다.
3. 첫 번째 전문번호의 issue에서 브랜치를 생성하고 checkout한다.
   - 전문번호가 하나인 경우: `gh issue develop {issue_number} --name feat/{전문번호소문자} --base main --checkout`
   - 전문번호가 여러 개인 경우: `gh issue develop {첫번째_issue_number} --name feat/{전문번호소문자1}-{전문번호소문자2}-...-{마지막전문번호소문자} --base main --checkout`
4. 아래 단계(5~7)를 전문번호마다 반복한다.
   4-1. `./CLAUDE.md` 파일 생성 네이밍 규칙을 참고해 해당 API의 타입 디렉터리(`src/types/{도메인}/`)와 서비스 파일(`src/services/{도메인}.service.ts`)이 존재하는지 확인한다. 없으면 네이밍 규칙에 따라 디렉터리 및 파일을 먼저 생성한다.
   4-2. 기존 타입 파일 패턴을 참고해 타입 파일(`src/types/{도메인}/{전문번호소문자}.ts`)을 생성한다.
   4-3. `src/types/{도메인}/index.ts` 에 export를 추가한다.
   4-4. `src/services/{도메인}.service.ts` 에 서비스 메서드를 추가한다.
5. `pnpm run build` 로 빌드 검증한다.
6. `.claude/commit-convention.md` 규칙에 따라 커밋 메시지를 작성하고 커밋한다.
   - 전문번호가 여러 개인 경우 커밋 메시지에 모든 전문번호를 나열한다.
7. 원격 브랜치에 push한다.
8. PR을 생성한다.
   - 전문번호가 하나인 경우: `gh pr create --base main --assignee gong-yeongbin --title "{전문번호소문자}_{한국어_API명}" --body "Resolves: #{issue_number}"`
   - 전문번호가 여러 개인 경우: `gh pr create --base main --assignee gong-yeongbin --title "{전문번호소문자1}-{전문번호소문자2}-...-{마지막전문번호소문자} 배치 구현" --body "Resolves: #{issue_number1}\nResolves: #{issue_number2}\n..."`

## 제약

- 위 순서 외의 동작은 절대 수행하지 않는다.
- 순서에 없는 파일 수정, 추가 리팩토링, 불필요한 개선 등은 하지 않는다.
