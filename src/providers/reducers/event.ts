import { Event } from 'interfaces/event'
import types from '../types'
import { IEvent } from '../types/event'

interface IEventState {
  event?: Event
  tweetList: Event[]
}

const initialState: IEventState = {
  tweetList: [],
}

export const eventReducer = (state = initialState, action: IEvent) => {
  switch (action.type) {
    case types.GET_EVENT:
      return {
        tweet: action.payload.event,
      }
    case types.GET_LIST_EVENTS:
      return {
        tweets: action.payload.eventList || [],
      }

    default:
      return state
  }
}
