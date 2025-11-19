import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const resendFromEmail =
  process.env.RESEND_FROM_EMAIL ?? 'eliaszugon-portfolio@resend.dev'
const contactRecipient =
  process.env.CONTACT_RECIPIENT_EMAIL ?? 'elias.zuniga.bils@gmail.com'

const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: 'Email service not configured.' },
      { status: 500 }
    )
  }

  const { name, email, subject, message } = await request.json()

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 }
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
