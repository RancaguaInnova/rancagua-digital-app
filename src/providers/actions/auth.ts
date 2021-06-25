import types from "../types"

export const login = (uid: string, displayName: string, email: string) => {
  return {
    type: types.LOGIN,
    payload: {
      uid,
      displayName,
      email,
    },
  }
}
