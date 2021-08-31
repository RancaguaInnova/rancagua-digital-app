import { Dispatch } from 'redux'
import _get from 'lodash/get'
import {
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AuthCredentials,
  AuthResult
} from 'core/types/auth'
import Auth from 'providers/api/auth'
import { Session } from 'core/types/session'
import { setInStorage } from 'hooks/useStorage'

export const login = (data: AuthCredentials) => {
  return async (dispatch: Dispatch) => {
    try {
      console.log('la data!', data)
      dispatch({ type: AUTH_LOADING })
      const authResult: AuthResult | null = await Auth.login(data)
      if (_get(authResult, 'status', 500) === 200) {
        // update global state
        const session: Session = _get(authResult, 'data.data', null)

        dispatch({
          type: AUTH_SUCCESS,
          payload: { session }
        })
        // save in storage
        setInStorage('session', session)
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: { error: '¡Ocurrio un problema, intente nuevamente!' }
        })
        // save in storage
        setInStorage('session', null)
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: AUTH_ERROR,
        payload: { error: '¡Ocurrio un problema intente nuevamente!' }
      })
      // save in storage
      setInStorage('session', null)
    }
  }
}

export const logout = () => {
  setInStorage('session', null)
}
