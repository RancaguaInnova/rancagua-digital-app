import { useState, useEffect } from 'react'
import { AppStorage } from 'providers/storage'

export const getFromStorage = async (key: string, initialValue: any) => {
  try {
    const { value }: any = await AppStorage.getItem(key)
    const item = typeof value === 'string' ? JSON.parse(value) : initialValue
    return Promise.resolve(item)
  } catch (e) {
    console.log(e)
    return Promise.resolve(initialValue)
  }
}

export const setInStorage = async (key: string, value: any) => {
  try {
    console.log('save!!!', key, value)
    if (value !== null) {
      // save
      return await AppStorage.setItem(key, JSON.stringify(value))
    } else {
      // remove from storage
      return await AppStorage.removeItem(key)
    }
  } catch (error) {
    console.log('setInStorageError', error)
    return Promise.reject(error)
  }
}

export const useStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState()

  // TODO: WARNING! Check this functionality
  useEffect(() => {
    ;(async () => {
      const value = await getFromStorage(key, initialValue)
      setValue(value)
    })()
  }, [])

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      setInStorage(key, valueToStore).then(() => {})
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
