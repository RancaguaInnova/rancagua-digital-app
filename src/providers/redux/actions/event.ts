import { Dispatch } from "redux";
import { Event } from "core/interfaces/event";
import types from "providers/redux/types";
import axios from "axios";
import { url } from "providers/urlprovider";

axios.defaults.baseURL = url;

export const GetListEvents = (date:string) => {
  console.log("test");
  return async (dispach: Dispatch) => {
    try {
      let events: Event[] = [];
      const { data, status } = await axios.get(`/city/events/app/list?date=${date}&limit=10`);
      if (status === 200) {
        console.log(data)
        events = data;
        dispach(eventList(events));
      } else {
        console.log(status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetEvent = (id:string) => {
 
  return async (dispach: Dispatch) => {
    try {
      const { data, status } = await axios.get(`/city/events/${id}`);
      if (status === 200) {
        console.log(data)
        dispach(event(data));
      } else {
        console.log(status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const eventList = (events: Event[]) => {
  return {
    type: types.GET_LIST_EVENTS,
    payload: {
      eventList: events,
      
    },
  };
};
export const event = (evento: Event) => {
  return {
    type: types.GET_EVENT,
    payload: {
      event: evento,
      
    },
  };
};
