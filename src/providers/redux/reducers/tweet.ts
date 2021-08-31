import { Tweet } from 'core/interfaces/tweet'
import types from 'providers/redux/types'
import { ITweet } from 'core/types/tweet'

interface ITweetState {
  tweet?: Tweet
  tweets: Tweet[]
}

const initialState: ITweetState = {
  tweets: []
}

export const tweetReducer = (state = initialState, action: ITweet) => {
  switch (action.type) {
    case types.GET_TWEET:
      return {
        tweet: action.payload.tweet
      }
    case types.GET_LIST_TWEETS:
      return {
        tweets: action.payload.tweetList || []
      }

    default:
      return state
  }
}
