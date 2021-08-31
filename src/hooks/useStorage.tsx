import { useState } from 'react'

// TODO: Add capacitor Logic here!
const STORAGE = window.localStorage

export const getFromStorage = (key, initialValue) => {
  return () => {
    try {
      const item = STORAGE.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      console.log(e)
      return initialValue
    }
  }
}

export const setInStorage = (key, value) => {
  try {
    if (value !== null) {
      // save
      STORAGE.setItem(key, JSON.stringify(value))
    } else {
      // remove from storage
      STORAGE.removeItem(key)
    }
  } catch (error) {
    console.log('setInStorageError', error)
  }
}

export const useStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(
    getFromStorage(key, initialValue)
  )
  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      setInStorage(key, valueToStore)
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
