import { AUTH_LOADING, AUTH_ERROR, AUTH_SUCCESS } from '../types/auth'

export const authReducer = (
  state = {},
  action: { type: any; payload: { session: any; error: any } }
) => {
  switch (action.type) {
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
      return {}
  }
}
