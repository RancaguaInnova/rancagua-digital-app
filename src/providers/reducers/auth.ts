import { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESS } from '../types/auth'

const initialState = {
  session: null,
  loading: false,
  error: ''
}

interface AuthPayload {
  session: any
  error: any
}

export const authReducer = (
  state = initialState,
  action: { type: any; payload: AuthPayload }
) => {
  const { type, payload } = action

  switch (type) {
    case AUTH_LOADING:
      return {
        session: null,
        loading: true,
        error: ''
      }
    case AUTH_ERROR:
      return {
        session: null,
        loading: false,
        error: payload.error
      }

    case AUTH_SUCCESS:
      return {
        session: payload.session,
        loading: false,
        error: ''
      }

    default:
      return state
  }
}
