import { Event } from 'core/interfaces/event'
import types from 'providers/redux/types'
import { IEvent } from 'core/types/event'

interface IEventState {
  event?: Event
  eventList: Event[]
}

const initialState: IEventState = {
  eventList: []
}

export const eventReducer = (state = initialState, action: IEvent) => {
  switch (action.type) {
    case types.GET_EVENT:
      return {
        event: action.payload.event
      }
    case types.GET_LIST_EVENTS:
      return {
        events: action.payload.eventList || []
      }

    default:
      return state
  }
}
