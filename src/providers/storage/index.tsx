import { Storage } from "@capacitor/storage"

export const setValue = async (key: string, value: string) => {
  await Storage.set({
    key: key,
    value: value,
  })
}

export const getValue = async (key: string) => {
  const { value } = await Storage.get({ key: key })

  return value
}

export const removeValue = async (key: string) => {
  await Storage.remove({ key: key })
}
