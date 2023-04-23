import * as dotenv from 'dotenv'

dotenv.config()

const {
  HOST,
  PORT,
  FW_EMAIL,
  FW_EMAIL_PASS,
  FW_EMAIL_HOST,
  FW_EMAIL_PORT,
  ADA_EMAIL,
  ADA_EMAIL_PASS,
  ADA_EMAIL_HOST,
  ADA_EMAIL_PORT,
  NODE_SECRET_JWT,
  NODE_API_KEY
} = process.env

export = {
  host: HOST,
  port: PORT,
  FW: {
    email: FW_EMAIL,
    emailPass: FW_EMAIL_PASS,
    emailHost: FW_EMAIL_HOST,
    emailPort: FW_EMAIL_PORT
  },
  ADA: {
    email: ADA_EMAIL,
    emailPass: ADA_EMAIL_PASS,
    emailHost: ADA_EMAIL_HOST,
    emailPort: ADA_EMAIL_PORT
  },
  secretJwt: NODE_SECRET_JWT,
  apiKey: NODE_API_KEY
}
