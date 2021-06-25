import { Tweet } from "../../interfaces/tweet"
import types from "../types"
import { ITweet } from "../types/tweet"

interface ITweetState {
  tweet?: Tweet
  tweets: Tweet[]
}

const initialState: ITweetState = {
  tweets: [],
}

export const tweetReducer = (state = initialState, action: ITweet) => {
  switch (action.type) {
    case types.GET_TWEET:
      return {
        tweet: action.payload.tweet,
      }
    case types.GET_LIST_TWEETS:
      return {
        tweets: action.payload.tweetList || [],
      }

    default:
      return state
  }
}
