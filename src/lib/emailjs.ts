import emailjs from '@emailjs/browser'

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY)
}

export type ContactPayload = {
  fromName: string
  fromEmail: string
  message: string
}

export function sendContactEmail(payload: ContactPayload) {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    return Promise.reject(new Error('EmailJS env vars are not configured. Check .env.local.'))
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, payload)
}
