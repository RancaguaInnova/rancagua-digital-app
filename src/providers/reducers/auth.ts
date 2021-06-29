import types from "../types"

export const authReducer = (
  state = {},
  action: { type: any; payload: { uid: any; displayName: any; email: any } },
) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
      }
    case types.LOGOUT:
      return {}

    default:
      return {}
  }
}