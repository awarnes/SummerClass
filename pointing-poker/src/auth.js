import { google } from 'googleapis'
import { serviceAccountKey } from './secrets/serviceAccountKey'

const scopes = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/firebase.database'
]

export const jwtClient = new google.auth.JWT(
  serviceAccountKey.client_email,
  null,
  serviceAccountKey.private_key,
  scopes
)
