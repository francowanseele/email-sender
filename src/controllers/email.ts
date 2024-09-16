import express from 'express'
import { sendMail } from '../services/mailer'
import { SendMailFromPreExistingTemplateDto } from '../types/sendMailDto'
import { CustomRequest } from '../utils/extension'

export const send = (req: CustomRequest, res: express.Response): void => {
  try {    
    const sendMailFromPreExistingTemplateDto: SendMailFromPreExistingTemplateDto = {
      SenderName: req.body.SenderName,
      To: req.body.To,
      Subject: req.body.Subject,
      PreExistingTemplate: req.body.PreExistingTemplate,
      Link: req.body.Link,
      ClientType: req.clientType,
      Text: req.body.Text
    }

    sendMail(sendMailFromPreExistingTemplateDto)
      .then(() => {
        res.json({ mesagge: 'ok' })
      })
      .catch((error) => {
        res.status(400).send(error.message)
      })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
