export function Skills() {
  return (
    <section className="skills">
      <h3 className="title">Skills</h3>
      <ul className="list">
        <li>
          <h4>HTML5 CSS3 SCSS</h4>
          <div className="content">
            <p>웹표준과 접근성을 고려한 시맨틱태그</p>
            <p>Position, flex, grid등을 이용한 레이아웃 구현, 반응형 웹 제작, Animation을 이용한 모션구현</p>
            <p>scss의 이해를 통한 mixin, 변수, include등 활용</p>
          </div>
        </li>
        <li>
          <h4>JavaScript &#183; Json</h4>
          <div className="content">
            <p>ES6+과 Map, Filter, Reduce등 함수의 이해를 통한 동적 웹페이지 구현</p>
            <p>setInterval, promise, async await등 비동기적 실행 이해</p>
            <p>fetchAPI, axiosLibrary를 통한 데이터활용과 JSON 파일 생성 및 이용</p>
          </div>
        </li>
        <li>
          <h4>React</h4>
          <div className="content">
            <p>SPA Framework과 Component LifeCycle Method의 이해</p>
            <p>Hooks을 이용한 동적작동 및 Context API를 이용한 전역 상태관리</p>
            <p>useEffect, useState등 Hooks의 사용과 React-router-dom을 이용</p>
          </div>
        </li>
        <li>
          <h4>Git &#183; Firebase</h4>
          <div className="content">
            <p>GitBash를 이용한 프로젝트 버전관리와 팀 작업</p>
            <p>GitHub를 이용한 배포</p>
            <p>firebase를 이용한 데이터 생성 추가</p>
          </div>
        </li>
        <li>
          <h4>
            <span>figma</span> <span>photo shop</span> <span>illust</span>
          </h4>
          <div className="content">
            <p>WireFrame, VectorImage, Prototype 제작</p>
            <p>이미지 편집 &amp; 디자인</p>
            <p>Icon, UI/UX 소스제작</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
