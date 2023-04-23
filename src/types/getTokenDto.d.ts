import { ClientType } from '../enums/clientType'

export interface GetToken {
  ClientType: ClientType
  Name: string
}

export type GetTokenDto = GetToken
export type GetValueTokenResponseDto = GetToken
