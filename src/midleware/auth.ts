import express from 'express'
import { getValueToken, isApiKeyValid } from '../services/security'
import { CustomRequest } from '../utils/extension'

export const authApiKey = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  try {
    const apiKey = String(req.header('x-api-key'))

    if (!isApiKeyValid(apiKey)) {
      res.status(401).json({ error: 'api-key missing or invalid.' })
    } else {
      next()
    }
  } catch (_) {
    res.status(401).json({ error: 'api-key missing or invalid.' })
  }
}

export const getClientFromToken = (req: CustomRequest, res: express.Response, next: express.NextFunction): void => {
  try {
    const authorization = req.get('authorization') ?? ''
    let token = ''
    let clientType = null

    if (authorization !== '' && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7)
      const decodedToken = getValueToken(token)

      clientType = decodedToken.ClientType
    }

    if (token === '' || clientType == null) {
      res.status(401).json({ error: 'Token missing or invalid.' })
    } else {
      req.clientType = clientType

      next()
    }
  } catch (_) {
    res.status(401).json({ error: 'Token missing or invalid.' })
  }
}
