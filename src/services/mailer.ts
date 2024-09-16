import { getTransporter } from '../externalServices/mailer'
import { GetTransporterDto } from '../types/getTransporterDto'
import { SendMailFromPreExistingTemplateDto } from '../types/sendMailDto'
import { getEmailInfo } from '../utils/envServices'
import { getPreExistingTemplate } from '../utils/template'

export const sendMail = async (input: SendMailFromPreExistingTemplateDto): Promise<void> => {
  const getTransporterDto: GetTransporterDto = {
    ClientType: input.ClientType
  }

  const tpl = await getPreExistingTemplate(input.PreExistingTemplate, input.Text)
  const emailInfo = getEmailInfo(input.ClientType)

  await getTransporter(getTransporterDto).sendMail({
    from: String(input.SenderName) + '<' + String(emailInfo.authEmail) + '>', // sender address
    to: input.To, // list of receivers
    subject: input.Subject, // Subject line
    text: tpl.text, // plain text body
    html: tpl.html // html body
  })
}
