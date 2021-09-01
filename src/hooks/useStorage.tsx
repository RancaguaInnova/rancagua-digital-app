import { useState, useEffect } from 'react'
import { AppStorage } from 'providers/storage'

export const getFromStorage = async (key: string, initialValue: any) => {
  return async () => {
    try {
      const item: any = await AppStorage.getItem(key)
      return typeof item === 'string' ? JSON.parse(item) : initialValue
    } catch (e) {
      console.log(e)
      return initialValue
    }
  }
}

export const setInStorage = async (key: string, value: any) => {
  try {
    if (value !== null) {
      // save
      await AppStorage.setItem(key, JSON.stringify(value)).then(() => {
        console.log('saved!')
      })
    } else {
      // remove from storage
      AppStorage.removeItem(key)
    }
  } catch (error) {
    console.log('setInStorageError', error)
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
