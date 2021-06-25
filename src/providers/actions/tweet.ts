import { Dispatch } from "redux"
import { Tweet } from "../../interfaces/tweet"
import types from "../types"
import axios from "axios"
import { url } from "../urlprovider"

axios.defaults.baseURL = url

export const GetListTweets = () => {
  return async (dispach: Dispatch) => {
    console.log("get tweets")
    try {
      let tweets: Tweet[] = []
      const { data, status } = await axios.get(`/rancagua/tweets`)
      console.log("data", data)
      if (status === 200) {
        tweets = data.data
        dispach(tweetList(tweets))
      } else {
        console.log(status)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const tweetList = (tweets: Tweet[]) => {
  return {
    type: types.GET_LIST_TWEETS,
    payload: {
      tweetList: tweets,
    },
  }
}
