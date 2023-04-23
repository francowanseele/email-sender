import express from 'express'

import { send } from '../controllers/email'
import { getClientFromToken } from '../midleware/auth'

const router = express.Router()

router.post('/', [getClientFromToken], send)

export default router
