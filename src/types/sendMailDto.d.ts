import { ClientType } from '../enums/clientType'
import { PreExistingTemplate } from '../enums/preExistingTemplate'

export interface SendMail {
  SenderName: string
  To: string
  Subject: string
  Text: string
  HTML: string
  PreExistingTemplate: PreExistingTemplate
  Link: string
  ClientType: ClientType
}

export type SendMailFromPreExistingTemplateDto = Omit<SendEmail, 'Text' | 'HTML'>
export type SendMailFromExplicitTemplateDto = Omit<SendEmail, 'PreExistingTemplate' | 'Link'>
