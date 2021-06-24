import { types } from "../types"

export const login = (uid: string, displayName: string, email: string) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      email,
    },
  }
}
