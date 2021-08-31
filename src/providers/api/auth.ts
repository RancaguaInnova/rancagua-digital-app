import { url } from 'providers/urlprovider'
import axios from 'axios'
import { AuthResult, AuthCredentials } from 'core/types/auth'
axios.defaults.baseURL = url
type LoginFn = (data: AuthCredentials) => Promise<AuthResult | null>

const login: LoginFn = async (data: AuthCredentials) => {
  try {
    return await axios.post(`/auth/login`, data)
  } catch (error) {
    return Promise.reject(error)
  }
}

// public methods
const Auth = {
  login
}

export default Auth
