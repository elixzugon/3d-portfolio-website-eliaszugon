import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const resendFromEmail =
  process.env.RESEND_FROM_EMAIL ?? 'eliaszugon-portfolio@resend.dev'
const contactRecipient =
  process.env.CONTACT_RECIPIENT_EMAIL ?? 'elias.zuniga.bils@gmail.com'

const resend = resendApiKey ? new Resend(resendApiKey) : null

const MAX_BODY_BYTES = 12_000
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

interface ContactPayload {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
  consent?: unknown
  website?: unknown
}

const isString = (value: unknown): value is string => typeof value === 'string'

const normalizeField = (value: unknown, maxLength: number) => {
  if (!isString(value)) return ''
  return value.trim().slice(0, maxLength)
}

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()

  return request.headers.get('x-real-ip') ?? 'unknown'
}

const isRateLimited = (key: string) => {
  const now = Date.now()
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  current.count += 1
  rateLimitStore.set(key, current)

  return current.count > RATE_LIMIT_MAX_REQUESTS
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      { status: 429 }
    )
  }

  const rawBody = await request.text()
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: 'Your message is too long. Please shorten it and try again.' },
      { status: 413 }
    )
  }

  let payload: ContactPayload
  try {
    payload = JSON.parse(rawBody) as ContactPayload
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    )
  }

  if (normalizeField(payload.website, 200)) {
    return NextResponse.json({ success: true })
  }

  if (payload.consent !== true) {
    return NextResponse.json(
      { error: 'Please accept the privacy notice before sending your message.' },
      { status: 400 }
    )
  }

  const name = normalizeField(payload.name, 100)
  const email = normalizeField(payload.email, 254).toLowerCase()
  const subject = normalizeField(payload.subject, 160)
  const message = normalizeField(payload.message, 4_000)

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  if (!resend) {
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  try {
    await resend.emails.send({
      from: resendFromEmail,
      to: contactRecipient,
      subject: `New contact: ${subject}`,
      reply_to: email,
      text: [
        `You have a new contact request from ${name}.`,
        '',
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form email failed', error)
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    )
  }
}
