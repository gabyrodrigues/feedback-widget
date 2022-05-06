import { MailAdapter, SendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5fa4f78f95c79c",
    pass: "d557ef73e1567f"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback Widget <oi@feedback.com>',
      to: 'Gabriely Rodrigues <gabrielyrodrigues@alu.ufc.br>',
      subject,
      html: body
    })
  }
}