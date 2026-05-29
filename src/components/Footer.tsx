export function Footer() {
  return (
    <footer>
      <ul>
        <li> <p className="font">Copyright 2023 KIM HYOSUN, All right reserved.</p></li>
        <li style={{display:"flex", gap:"10px"}}>
          <a
            href="https://jireh-muze.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font"
            data-cursor="link"
            data-name="blog보기"
          >
            BLOG
          </a>
        
          <a
            href="https://github.com/Kim-hyosun"
            target="_blank"
            rel="noopener noreferrer"
            className="font"
            data-cursor="link"
            data-name="github보기"
          >
            GitHub
          </a>
        </li>
      </ul>
      <div style={{ display:"flex" , gap:"8px",fontSize: '1rem', opacity: 0.7, marginTop: '16px', lineHeight: 1.6 }}>

        <p className="font">Certificate : </p>
        <p className="font">정보처리기사 — 한국산업인력공단 (2024.06)  |</p>
        <p className="font">컴퓨터활용능력 2급 — 대한상공회의소 (2023.05)  |</p>
        <p className="font">MOS 2010 master — Microsoft (2016.12)</p>
      </div>
    </footer>
  )
}
