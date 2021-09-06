import { Dispatch } from 'redux'
import _get from 'lodash/get'

import {
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from 'providers/redux/types'

import { SESSION_KEY } from 'core/constants'

import { AuthCredentials, AuthResult, AuthPayload } from 'core/types/auth'
import Auth from 'providers/api/auth'
import { Session } from 'core/types/session'
import { setInStorage, getFromStorage } from 'hooks/useStorage'

export const login = (data: AuthCredentials) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: AUTH_LOADING })
      const authResult: AuthResult | null = await Auth.login(data)
      if (_get(authResult, 'status', 500) === 200) {
        // update global state
        const session: Session | null = _get(authResult, 'data', null)
        dispatch({
          type: AUTH_SUCCESS,
          payload: { session }
        })
        // save in storage
        await setInStorage(SESSION_KEY, session)
      } else {
        dispatch({
          type: AUTH_ERROR,
          payload: { error: '¡Ocurrio un problema, intente nuevamente!' }
        })
        // save in storage
        await setInStorage(SESSION_KEY, null)
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: AUTH_ERROR,
        payload: { error: '¡Ocurrio un problema intente nuevamente!' }
      })
      // save in storage
      await setInStorage(SESSION_KEY, null)
    }
  }
}

export const logout = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: AUTH_LOGOUT,
      payload: null
    })
    await setInStorage(SESSION_KEY, null)
  }
}

export const loadSession = () => {
  return async (dispatch: Dispatch) => {
    try {
      const payload: AuthPayload = { session: null, loading: true, error: '' }
      dispatch({ type: AUTH_LOADING, payload })
      const session: any = await getFromStorage(SESSION_KEY, null)
      console.log('la session!', session)
      payload.loading = false
      payload.error = ''
      if (typeof session !== undefined) payload.session = session as Session

      console.log('load session payload', payload)

      dispatch({ type: AUTH_SUCCESS, payload })
    } catch (error) {
      dispatch({ type: AUTH_SUCCESS, payload: { session: null } })
    }
  }
}
