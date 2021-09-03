import {
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from 'providers/redux/types'
import _get from 'lodash/get'

import { IAuth } from 'core/types/auth'
var initialState = {
  session: null,
  loading: false,
  error: ''
}

interface AuthPayload {
  session: any
  error: any
}

export const authReducer = (state = initialState, action: IAuth) => {
  const { type, payload } = action

  switch (type) {
    case AUTH_LOADING:
      return {
        session: null,
        loading: true,
        error: ''
      }
    case AUTH_ERROR:
      //TODO: remove from localStorage
      return {
        session: null,
        loading: false,
        error: _get(payload, 'error', '')
      }
    case AUTH_LOGOUT:
      //TODO: remove from localStorage
      return {
        session: null,
        loading: false,
        error: ''
      }
    case AUTH_SUCCESS:
      //TODO:  save into localStorage
      return {
        session: _get(payload, 'session', null),
        loading: false,
        error: ''
      }

    default:
      return state
  }
}
