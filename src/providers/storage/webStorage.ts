export const WebStorage = {
  getItem: async (key: string) => {
    return Promise.resolve(window.localStorage.getItem(key))
  },
  setItem: async (key: string, value: string) => {
    return Promise.resolve(window.localStorage.setItem(key, value))
  },
  removeItem: async (key: string) => {
    return Promise.resolve(window.localStorage.removeItem(key))
  }
}
