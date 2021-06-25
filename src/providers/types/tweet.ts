import { Tweet } from "../../interfaces/tweet"

export interface IPayload {
  tweetList: Tweet[]
  tweet: Tweet
}

export interface ITweet {
  type: any
  payload: IPayload
}
