import { Session } from './session'

export interface AuthCredentials {
  email: string
  password: string
}

export interface AuthResult {
  data?: Session
  headers: any
  request: any
  status: number
  statusText: string
}

export interface AuthPayload {
  session: Session | null
  loading: boolean
  error: string
}

export interface IAuth {
  type: string
  payload?: AuthPayload
}
