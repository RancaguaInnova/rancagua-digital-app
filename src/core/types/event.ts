import { Event } from '../../core/interfaces/event'

export interface IPayload {
  eventList: Event[]
  event: Event
}

export interface IEvent {
  type: any
  payload: IPayload
}
