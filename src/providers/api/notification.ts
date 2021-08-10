import axios from "axios"
import { url } from "providers/urlprovider"
axios.defaults.baseURL = url

export const getPublicKey = async () => {
  try {
    let { data, status } = await axios.get("/city/notifications/getKey")
    if (status === 200) {
      return data
    }
    return ""
  } catch (e) {
    console.log(e)
    return null
  }
}
export const addSubcription = async (subcription:any) => {
  try {
    let { data, status } = await axios.post("/city/notifications/subscribe",subcription)
    console.log("data",data)
    console.log("status",status)
    if (status === 200) {
      return data
    }
    return ""
  } catch (e) {
    console.log(e)
    return null
  }
}