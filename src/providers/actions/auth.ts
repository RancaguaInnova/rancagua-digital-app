import { Dispatch } from 'redux'
import { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESS } from '../types/auth'
import axios from 'axios'
import { url } from '../urlprovider'

axios.defaults.baseURL = url

export const login = data => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: AUTH_LOADING })
      const { data, status } = await axios.get(`/auth/login`)
      if (status === 200) {
        dispatch({
          type: AUTH_SUCCESS,
          payload: { session: data.data }
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
