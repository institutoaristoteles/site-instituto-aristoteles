import { NextResponse } from "next/server"
import * as nodemailer from "nodemailer"

interface RequestBodyDto {
  name: string
  email: string
  subject: string
  message: string
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
    credentials: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  },
})

const formatContent = (requestBody: RequestBodyDto) => `
  <b>Contato através do formulário de contato do site</b><br/>
  <b>De:</b> (${requestBody.name}) ${requestBody.email}<br/>
  <b>Assunto:</b> ${requestBody.subject}<br/>
  <b>Mensagem:</b><br/>${requestBody.message}
`

export async function POST(request: Request) {
  const requestBody = (await request.json()) as RequestBodyDto

  const info = await transporter.sendMail({
    from: `"Contato do Site" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    replyTo: requestBody.email,
    subject: `Contato | ${requestBody.subject}`,
    html: formatContent(requestBody),
  })

  return NextResponse.json(info)
}
