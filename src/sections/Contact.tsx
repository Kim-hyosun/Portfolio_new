import { EmailForm } from '../components/EmailForm'
import kakaoImg from '../assets/kakaoIMG.png'

export function Contact() {
  return (
    <article className="contact">
      <h3 className="title">Contact</h3>
      <div className="border">
        <EmailForm />
        <figure className="kakao">
          <img
            src={kakaoImg}
            alt="카카오톡 오픈채팅으로 연결되는 QR코드입니다."
            data-cursor="click"
            data-name=""
          />
          <figcaption className="font">kakao openchat</figcaption>
        </figure>
      </div>
    </article>
  )
}
