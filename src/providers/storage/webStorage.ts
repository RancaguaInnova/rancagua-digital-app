export const WebStorage = {
  getItem: async (key: string) => {
    return Promise.resolve(window.localStorage.getItem(key))
  },
  setItem: async (key: string, data: string) => {
    return Promise.resolve(window.localStorage.setItem(key, data))
  },
  removeItem: async (key: string) => {
    return Promise.resolve(window.localStorage.removeItem(key))
  }
}
