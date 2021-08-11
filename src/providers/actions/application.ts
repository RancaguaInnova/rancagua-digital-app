import { Dispatch } from "redux"
import { Application } from "interfaces/applications"
import types from "../types"
import axios from "axios"
import { url } from "providers/urlprovider"

axios.defaults.baseURL = url

export const GetListApplications = () => {
  return async (dispach: Dispatch) => {
    console.log("get GetListApplications")

    try {
      let applications: Application[] = []
      const { data, status } = await axios.get(`/city/applications`)
      if (status === 200) {
        applications = data.rows

        dispach(
          applicationList(
            applications.filter((app) => app.approved && !app.isPrivate),
          ),
        )
      } else {
        console.log("status aplication get", status)
      }
    } catch (error) {
      console.log("llego al error")
      console.log(error)
    }
  }
}

export const applicationList = (applications: Application[]) => {
  return {
    type: types.GET_LIST_APPLICATION,
    payload: {
      listApplication: applications,
    },
  }
}
