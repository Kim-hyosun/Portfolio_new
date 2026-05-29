# KIM HYOSUN — Frontend Portfolio

기존 Vanilla HTML/JS/SCSS 포트폴리오를 **Vite + React 19 + TypeScript + Tailwind 4** 기반의 SPA로 마이그레이션한 프로젝트입니다.

> 기존 버전은 **Portfolio repo** 에 보존되어 있습니다.

---

## 1. 스택

| Layer | 선택 | 비고 |
|---|---|---|
| Framework | **Vite 7** | dev HMR, ESM 빠른 빌드 |
| Runtime | **React 19.2** |  |
| Language | **TypeScript 6** | strict |
| Package manager | **pnpm 9** | `.nvmrc`로 Node 22.22.3(lts) 설정 |
| Styling | **Tailwind 4** + CSS Modules + legacy.css | `@tailwindcss/vite` 플러그인, `@theme` 토큰 |
| Form | **React Hook Form 미사용** — 1폼이라 useState로 충분 |
| Email | **@emailjs/browser 4.4** | CDN script → 로컬 전환 |
| Lint/Format | ESLint 10 (flat) + Prettier 3 | |
| Deploy | **Vercel** | base path 불필요 |

---

## 2. 폴더 구조

```
Portfolio_new/
├── public/
│   ├── fonts/                     6.4MB (Pretendard, NotoSans, Hanuman, DMSerifDisplay)
│   ├── favicon.ico, favicon.png, opengraph.png
├── src/
│   ├── main.tsx, App.tsx
│   ├── index.css                  Tailwind import + @font-face + theme + legacy
│   ├── styles/
│   │   ├── theme.css              @theme 토큰 (palette + semantic)
│   │   └── legacy.css             기존 SCSS 컴파일본 (1622줄, 분해 예정)
│   ├── components/
│   │   ├── Background/Background.tsx + paths.ts   SVG path drawing
│   │   ├── Header.tsx · Footer.tsx · MenuPage.tsx
│   │   ├── ThemeToggle.tsx + ThemeToggle.module.css   단일 토글
│   │   ├── EmailForm.tsx
│   │   ├── Cursor.tsx · Loading.tsx
│   ├── sections/
│   │   └── Work.tsx · Skills.tsx · About.tsx · Contact.tsx
│   ├── hooks/
│   │   ├── useTheme.ts            localStorage + prefers-color-scheme
│   │   ├── useMenu.ts             body.noScroll 토글
│   │   ├── useLoading.ts          window.load + 1.4s setTimeout
│   │   ├── useCursor.ts           mousemove + data-cursor switch
│   │   └── useSvgDrawingPath.ts   getTotalLength + RAF dashoffset
│   ├── lib/emailjs.ts             env wrapper + sendContactEmail
│   ├── data/projects.ts           Work 카드 11개 데이터
│   └── assets/                    work/ · svg/ · icons/ · kakaoIMG.png
├── .env.example, .env.local       VITE_EMAILJS_*
├── .nvmrc                         Node 22
├── eslint.config.js, .prettierrc, .prettierignore
├── vite.config.ts                 react() + tailwindcss() 플러그인
└── package.json
```

---

## 3. 실행

```bash
# Node 22 사용
nvm use            # .nvmrc 인식

# 의존성 설치
pnpm install

# 개발 서버 (http://localhost:5173)
pnpm dev

# 타입 체크 / 린트 / 포맷
pnpm type-check
pnpm lint
pnpm format

# 프로덕션 빌드 → dist/
pnpm build
pnpm preview       # 빌드 결과 미리보기
```

### 환경 변수
`.env.local` (gitignored)에 EmailJS 키를 설정합니다. `.env.example` 참고.

```env
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
```


---

## 4. 마이그레이션 진행 사항

### ✅ 기존 정적 코드 개선 (`../Portfolio/`)
- 미사용 이미지 3개 삭제 (-1.8MB)
- Work 카드 8개 신규 추가 (Next.js 4 / TS Yourblog 2 / React 2)
- PNG → WebP 변환 (cwebp q=82) — **2.7MB → 164KB (-94%)**
- 죽은 코드 제거 (resize handler, console.log)
- EmailJS init 중복 제거
- 폼 validation 복구 (required, type=email, JS 가드)
- `target="_blank"`에 `rel="noopener noreferrer"` 15곳 보강
- 다크모드 영속화 (localStorage + prefers-color-scheme)
- scroll handler `requestAnimationFrame` + `{ passive: true }` 래핑
- 첫 카드 `loading="lazy"` 제거 + `fetchpriority="high"` (LCP)

### ✅ Vite + React + TS 스캐폴드
- `pnpm create vite Portfolio_new --template react-ts`
- Tailwind 4 (`@tailwindcss/vite`), Prettier 3, `.nvmrc`, `.env.example` 추가
- React 19.2 / Vite 7 / @vitejs/plugin-react 5 (Vite 8 rolldown native binding 이슈로 7 안정화)
- Node 22 LTS

### ✅ 자산 + 글로벌 스타일
- `common/font/` → `public/fonts/` (6.4MB, 33 파일)
- `common/style/font.css` → `src/index.css`로 `@font-face` 12개 이전 (woff2 우선, 경로 `/fonts/*`)
- 이미지 자산(work, svg, icons, kakao) → `src/assets/`
- `style/*.css` 4개 → `src/styles/legacy.css` 통합 (1622줄, `../images/` → `../assets/icons/` 경로 일괄 변환)
- `minireset.min.css` → Tailwind preflight 채택

### ✅ 마크업 → JSX
- Work 카드 11개 → `src/data/projects.ts` 배열로 분리 (타입 안전)
- SVG path 3개 → `src/components/Background/paths.ts` 상수 (19KB)
- 컴포넌트 분할: `Header / Footer / MenuPage / Loading / Cursor / Background`
- 섹션 분할: `Work / Skills / About / Contact`
- 첫 work 카드만 `fetchPriority="high"`, 나머지 `loading="lazy"`
- `index.html` 메타(lang=ko, description, og) 이전

### ✅ 컴포넌트 책임 정리
- `EmailForm` — Contact에서 분리
- `ThemeToggle` — dark/light 두 버튼을 단일 버튼으로 통합 (CSS Module, `:global(body.dark)` 활용, `aria-pressed`, `aria-label` 동적)

### ✅ 동적 로직 hooks
- 5개 hooks: `useTheme / useMenu / useLoading / useCursor / useSvgDrawingPath`
- `@emailjs/browser` npm 패키지 + `src/lib/emailjs.ts` (env wrapper)
- 컴포넌트 ↔ hooks props 연결
- 다크모드 영속화, 메뉴 오픈/닫기, 1.4초 로딩, 커스텀 커서, SVG path drawing, EmailJS 발송 모두 동작

### ✅ 토큰화 + 배포 준비 + CSS 자연 분리
- `src/styles/theme.css` — Tailwind 4 `@theme`로 색/폰트 토큰 정의 (palette + semantic)
- `og:url` 메타 추가 (배포 도메인 확정 후 수정 필요)
- README 갱신 (본 문서)
- **legacy.css에서 자연 분리 영역 추출**:
  - `src/styles/cursor.css` (45줄) — 기존 `cursorstyle.css` 영역
  - `src/styles/loading.css` (90줄) — 기존 `load.css` 영역 (별 애니메이션)
  - `legacy.css` 1622 → 1488줄로 감소


---

## 5. 배포 - Vercel

---

## 6. 알려진 제약

- `index.html`의 inline `class="noScroll"`이 1.4초 후 hook이 remove. JS 비활성 환경에선 영구 noScroll 상태.
- 커스텀 커서는 `mousemove` 이벤트를 throttle하지 않음 (원본 동작 유지). 60fps 무난.
- SVG `getTotalLength()` 호출이 path 19KB일 때 첫 paint 약간 지연 가능 (1ms 미만, 실측 영향 없음).

---

## 원본 포트폴리오

기존 Vanilla 버전: [`../Portfolio/`](../Portfolio/) · 배포: <https://kim-hyosun.github.io/Portfolio/>
