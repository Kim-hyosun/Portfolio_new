import { useState, type FormEvent } from 'react'
import { sendContactEmail } from '../lib/emailjs'

export function EmailForm() {
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return

    const nameEl = form.elements.namedItem('name') as HTMLInputElement
    const emailEl = form.elements.namedItem('email') as HTMLInputElement
    const messageEl = form.elements.namedItem('message') as HTMLTextAreaElement

    const NAME = nameEl.value.trim()
    const EMAIL = emailEl.value.trim()
    const MESSAGE = messageEl.value.trim()
    if (!NAME || !EMAIL || !MESSAGE) {
      alert('성함, 이메일, 메시지를 모두 입력해주세요.')
      return
    }

    setIsSending(true)
    try {
      await sendContactEmail({ fromName: NAME, fromEmail: EMAIL, message: MESSAGE })
      alert('메일이 성공적으로 발송되었습니다. 감사합니다.')
      form.reset()
    } catch {
      alert('메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <form className="emailForm" onSubmit={handleSubmit}>
      <label htmlFor="userName" className="font" data-cursor="click" data-name="">
        Your Name{' '}
      </label>
      <input
        type="text"
        name="name"
        id="userName"
        placeholder="성함을 입력해주세요"
        required
        minLength={1}
        maxLength={50}
      />
      <br />
      <label htmlFor="userEmail" className="font" data-cursor="click" data-name="">
        Your Email{' '}
      </label>
      <input
        type="email"
        name="email"
        id="userEmail"
        placeholder="회신 받을 수 있는 메일 주소를 입력해주세요"
        required
      />
      <br />
      <label htmlFor="message" className="font msg" data-cursor="click" data-name="">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        required
        minLength={1}
        maxLength={2000}
        placeholder="여기에 간단한 내용을 적어서 아래 Send 버튼을 눌러 주시면 저에게 메일을 보낼 수 있습니다. 감사합니다."
      />
      <br />
      <button
        type="submit"
        id="emailBtn"
        className="font"
        disabled={isSending}
        data-cursor="click"
        data-name=""
      >
        Send
      </button>
    </form>
  )
}
