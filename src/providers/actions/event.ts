import { Dispatch } from "redux"
import { Event } from "../../interfaces/event"
import types from "../types"
import axios from "axios"
import { url } from "../urlprovider"

axios.defaults.baseURL = url

export const GetListEvents = () => {
  console.log("test")
  return async (dispach: Dispatch) => {
    try {
      let events: Event[] = []
      const { data, status } = await axios.get(`/rancagua/tweets`)
      if (status === 200) {
        events = data.data
        dispach(eventList(events))
      } else {
        console.log(status)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const eventList = (events: Event[]) => {
  return {
    type: types.GET_LIST_EVENTS,
    payload: {
      eventList: events,
    },
  }
}