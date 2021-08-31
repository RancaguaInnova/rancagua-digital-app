import axios from "axios"
import { url } from "providers/urlprovider"
import { Token } from "@capacitor/push-notifications"
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
export const addSubscription = async (subscription: any) => {
  try {
    let { data, status } = await axios.post(
      "/city/notifications/subscribe",
      subscription,
    )

    if (status === 200) {
      return data
    }
    return ""
  } catch (e) {
    console.log(e)
    return null
  }
}
export const addSubscriptionApp = async (token: string) => {
  try {
    let res = await axios.post("/city/notifications/subscribeApp", {
      token: token,
    })

    return res
  } catch (e) {
    console.log(e)
    return e
  }
}
