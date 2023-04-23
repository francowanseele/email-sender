import express from 'express'
import { getToken } from '../services/security'
import { GetTokenDto } from '../types/getTokenDto'

export const generateTokenForClient = (req: express.Request, res: express.Response): void => {
  try {
    const getTokenDto: GetTokenDto = {
      ClientType: req.body.ClientType,
      Name: req.body.Name
    }

    getToken(getTokenDto).then((tokenResult) => {
      res.status(200).send(String(tokenResult))
    })
      .catch((error) => {
        res.status(400).send(error.message)
      })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
