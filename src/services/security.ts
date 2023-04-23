import jwt from 'jsonwebtoken'
import { GetTokenDto, GetValueTokenResponseDto } from '../types/getTokenDto'
import config from '../config'

export const getToken = async (input: GetTokenDto): Promise<string> => {
  return jwt.sign(
    input,
    config.secretJwt as string
  )
}

export const getValueToken = (token: string): GetValueTokenResponseDto => {
  return jwt.verify(token, config.secretJwt as string) as GetValueTokenResponseDto
}

export const isApiKeyValid = (apiKey: string): boolean => {
  return config.apiKey === apiKey
}
