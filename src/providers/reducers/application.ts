import { Application } from 'interfaces/applications'
import types from '../types'
import { IApplication } from '../types/application'

const initialState = {
  applications: [],
}

export const applicationReducer = (
  state = initialState,
  action: IApplication
) => {
  switch (action.type) {
    case types.GET_LIST_APPLICATION:
      return {
        applications: action.payload.listApplication || [],
      }

    default:
      return state
  }
}
