import axios from "axios"
import { url } from "providers/urlprovider"

axios.defaults.baseURL = url

export const getPublicKey = async () => {
  try {
    let { data, status } = await axios.get("api/key")
    let buffer = await data.arrayBuffer()
    return new Uint8Array(buffer)
  } catch (e) {
    console.log(e)
    return null
  }
}
