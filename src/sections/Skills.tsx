export function Skills() {
  return (
    <section className="skills">
      <h3 className="title">Skills</h3>
      <ul className="list">
        <li>
          <h4>Language</h4>
          <div className="content">
            <p>JavaScript ES6+ 함수형 도구(map/filter/reduce) 활용</p>
            <p>TypeScript strict, 제네릭, 유틸리티 타입 사용</p>
            <p>async/await, Promise 기반 비동기 흐름 처리</p>
          </div>
        </li>
        <li>
          <h4>Framework</h4>
          <div className="content">
            <p>React 19 / Vue.js — 컴포넌트 기반 SPA 구현 /Hooks, Context, Suspense 기반 개발</p>
            <p>Next.js 15 — App Router, SSR/CSR, monorepo 운영</p>
            <p>Flutter — WebApp iOS/Android 빌드 및 배포 경험</p>
          </div>
        </li>
        <li>
          <h4>Styling</h4>
          <div className="content">
            <p>Tailwind CSS 4 — color chart값 토큰화</p>
            <p>shadcn/ui + Radix — 접근성 고려한 headless UI 통한 디자인시스템 구축</p>
            <p>SCSS, styled-components, GSAP 모션 구현</p>
          </div>
        </li>
        <li>
          <h4>State &amp; API</h4>
          <div className="content">
            <p>Redux Toolkit + RTK Query / vuex — 서버 상태 캐싱 동기화</p>
            <p>Zustand + TanStack Query — CSR-first 패턴 적용</p>
            <p>React Hook Form + Zod — 폼 검증과 타입 안전성</p>
          </div>
        </li>
        <li>
          <h4>Backend &amp; Infra</h4>
          <div className="content">
            <p>Node.js — Express, Koa 기반 REST API 서버 개발</p>
            <p>MongoDB, Firebase, FCM — 데이터 설계 및 운영 경험, app push messaging system</p>
            <p>AWS S3, Swagger — 파일 업로드 및 API 문서화</p>
          </div>
        </li>
        <li>
          <h4>Tooling &amp; Design</h4>
          <div className="content">
            <p>Git/GitHub — 브랜치 전략, PR 리뷰 협업 경험</p>
            <p>pnpm/Yarn, ESLint, Prettier — 코드 품질 유지 및 취약점 관리</p>
            <p>Figma (Photoshop, Illustrator) — 디자인 가공</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
