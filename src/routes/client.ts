import express from 'express'

import { generateTokenForClient } from '../controllers/client'
import { authApiKey } from '../midleware/auth'

const router = express.Router()

router.get('/', [authApiKey], generateTokenForClient)

export default router
