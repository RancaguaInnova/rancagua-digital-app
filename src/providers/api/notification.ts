import axios from "axios"
import { url } from "providers/urlprovider"
axios.defaults.baseURL = url

export const getPublicKey = async () => {
  try {
    let { data, status } = await axios.get("/rancagua/notifications/getKey")
    if (status === 200) {
      return data
    }
    return ""
  } catch (e) {
    console.log(e)
    return null
  }
}
