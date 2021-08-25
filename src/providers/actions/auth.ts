import { Dispatch } from 'redux'
import _get from 'lodash/get'
import {
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AuthCredentials
} from '../types/auth'
import axios from 'axios'
import { url } from '../urlprovider'

axios.defaults.baseURL = url

export const login = (data: AuthCredentials) => {
  return async (dispatch: Dispatch) => {
    try {
      console.log('la data!', data)
      dispatch({ type: AUTH_LOADING })
      const authResult = await axios.get(`/auth/login`)
      if (_get(authResult, 'status', 500) === 200) {
        dispatch({
          type: AUTH_SUCCESS,
          payload: { session: _get(authResult, 'data.data', null) }
        })
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: { error: '¡Ocurrio un problema intente nuevamente!' }
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: AUTH_ERROR,
        payload: { error: '¡Ocurrio un problema intente nuevamente!' }
      })
    }
  }
}
