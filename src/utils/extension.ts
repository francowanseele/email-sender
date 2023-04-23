import express from 'express'
import { ClientType } from '../enums/clientType'

export interface CustomRequest extends express.Request {
  clientType?: ClientType
}
