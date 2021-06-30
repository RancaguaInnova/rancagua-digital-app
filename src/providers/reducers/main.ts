import { authReducer } from "./auth"
import { combineReducers } from "redux"
import { tweetReducer } from "./tweet"
import { applicationReducer } from "./application"
import { eventReducer } from "./event"

//aca agregar todos los reducers
export const mainReducer = combineReducers({
  auth: authReducer,
  tweet: tweetReducer,
  application: applicationReducer,
  event: eventReducer,
})
