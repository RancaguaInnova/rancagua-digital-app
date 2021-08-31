import types from 'providers/redux/types'
import { IApplication } from 'core/types/application'

const initialState = {
  applications: []
}

export const applicationReducer = (
  state = initialState,
  action: IApplication
) => {
  switch (action.type) {
    case types.GET_LIST_APPLICATION:
      return {
        applications: action.payload.listApplication
      }

    default:
      return state
  }
}
