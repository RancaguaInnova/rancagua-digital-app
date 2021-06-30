import { Event } from "../../interfaces/event"

export interface IPayload {
  eventList: Event[]
  event: Event
}

export interface IEvent {
  type: any
  payload: IPayload
}
