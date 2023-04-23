import { ClientType } from '../enums/clientType'
import config from '../config'

export const getEmailInfo = (clientType: ClientType): any => {
  switch (clientType) {
    case ClientType.FW:
      return {
        host: config.FW.emailHost,
        port: config.FW.emailPort,
        authEmail: config.FW.email,
        authPassword: config.FW.emailPass
      }
    case ClientType.ADA:
      return {
        host: config.ADA.emailHost,
        port: config.ADA.emailPort,
        authEmail: config.ADA.email,
        authPassword: config.ADA.emailPass
      }
    default:
      throw new Error('utils/envServices/getEmailInfo -> ClientType not found')
  }
}
