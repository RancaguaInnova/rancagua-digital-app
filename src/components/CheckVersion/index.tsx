import { isPlatform } from "@ionic/react"
import axios from "axios"

import { url } from "providers/urlprovider"
axios.defaults.baseURL = url
const checkVersionWithApi = async (platform: string, version: string) => {
  try {
    const { data, status } = await axios.get("/rancagua/app/version")
    if (status === 200) {
      if (platform === "ios") {
        if (data.ios !== version) {
          return true
        } else {
          return false
        }
      }
      if (platform === "android") {
        if (data.android !== version) {
          return true
        } else {
          return false
        }
      }
    } else {
      console.log("error get version app")
      return false
    }
  } catch (err) {
    return false
  }

  return false
}

const VerifyVersion = async (
  setAlertIos: (arg0: boolean) => void,
  setAlertAndroid: (arg0: boolean) => void,
  versionAndroid: string,
  versionIos: string,
) => {
  if (isPlatform("hybrid") && isPlatform("ios")) {
    let itsNotUpdatedIos = await checkVersionWithApi("ios", versionIos)
    setAlertIos(itsNotUpdatedIos)
  } else if (isPlatform("hybrid") && isPlatform("android")) {
    let itsNotUpdatedAndroid = await checkVersionWithApi(
      "android",
      versionAndroid,
    )
    setAlertAndroid(itsNotUpdatedAndroid)
  } else {
  }
}
export default VerifyVersion
