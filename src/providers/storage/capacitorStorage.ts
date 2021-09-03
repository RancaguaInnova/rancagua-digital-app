import { Storage } from '@capacitor/storage'

export const CapacitorStorage = {
  getItem: async (key: string) => {
    return await Storage.get({ key })
  },
  setItem: async (key: string, value: string) => {
    return await Storage.set({
      key,
      value
    })
  },
  removeItem: async (key: string) => {
    return await Storage.remove({ key })
  }
}
