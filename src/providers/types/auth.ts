export const AUTH_LOADING = 'auth/loading'
export const AUTH_ERROR = 'auth/error'
export const AUTH_SUCCESS = 'auth/success'

export interface AuthCredentials {
  email: string
  password: string
}
