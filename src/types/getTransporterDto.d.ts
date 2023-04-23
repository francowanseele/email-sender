import { ClientType } from '../enums/clientType'

export interface GetTransporter {
  ClientType: ClientType
}

export type GetTransporterDto = GetTransporter
