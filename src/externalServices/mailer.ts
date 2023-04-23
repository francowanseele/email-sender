import nodemailer from 'nodemailer'
import { GetTransporterDto } from '../types/getTransporterDto'
import { getEmailInfo } from '../utils/envServices'

export const getTransporter = (input: GetTransporterDto): nodemailer.Transporter => {
  const emailInfo = getEmailInfo(input.ClientType)

  // create reusable transporter object using the default SMTP transport
  return nodemailer.createTransport({
    host: emailInfo.host,
    port: emailInfo.port,
    secure: true, // true for 465, false for other ports
    auth: {
      user: emailInfo.authEmail, // generated ethereal user
      pass: emailInfo.authPassword // generated ethereal password
    }
  })
}
