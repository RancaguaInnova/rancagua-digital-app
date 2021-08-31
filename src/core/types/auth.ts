import { Session } from './session'

export const AUTH_LOADING = 'auth/loading'
export const AUTH_ERROR = 'auth/error'
export const AUTH_SUCCESS = 'auth/success'
export const AUTH_LOGOUT = 'auth/logout'

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
