import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'Cristi', email: 'cristiallan@gmail.com' },
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService()
    const mailerTo = { name: 'bla', email: 'bla@email.com' }
    const mailerMessage = { subject: 'foo bar', body: 'e ai pessoal tudo bem aqui quem fala é o edu' }

    emailService.sendMail({to: mailerTo, message: mailerMessage})

    return res.send()
  }
}
