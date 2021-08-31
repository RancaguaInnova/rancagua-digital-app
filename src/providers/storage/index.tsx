import { Storage } from "@capacitor/storage"
import { Capacitor } from "@capacitor/core"

const isAvailable = Capacitor.isPluginAvailable("Storage")


export const WebStorage = {
  getItem: async (key: string) => {
    return  isAvailable?   Promise.resolve(Storage.get({ key: key })) : Promise.resolve(window.localStorage.getItem(key))
  },
  setItem: async (key: string, data: string) => {
    return  isAvailable?  Promise.resolve(Storage.set({
      key: key,
      value: data,
    })):  Promise.resolve(window.localStorage.setItem(key, data))
  },
  removeItem: async (key: string) => {
    return isAvailable? Promise.resolve( Storage.remove({ key: key })): Promise.resolve(window.localStorage.removeItem(key))
  }
}
