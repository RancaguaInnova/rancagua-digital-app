import { Tweet } from "../../interfaces/tweet.interface"
import { tweetType } from "../types/tweets"

interface Payload {
  list: Tweet[]
  tweet: Tweet
}

interface TweetAction {
  type: any
  payload: Payload
}

export const tweetReducer = (state = {}, action: TweetAction) => {
  switch (action.type) {
    case tweetType.get:
      return {
        tweet: action.payload.tweet,
      }
    case tweetType.list:
      return {
        tweets: action.payload.list || [],
      }

    default:
      return {}
  }
}
