import { Dispatch } from 'redux'
import { Tweet } from 'core/interfaces/tweet'
import types from 'providers/redux/types'
import axios from 'axios'
import { url } from 'providers/urlprovider'

axios.defaults.baseURL = url

export const GetListTweets = () => {
  return async (dispach: Dispatch) => {
    try {
      let tweets: Tweet[] = []
      const { data, status } = await axios.get(`/city/tweets`)
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
      tweetList: tweets
    }
  }
}
