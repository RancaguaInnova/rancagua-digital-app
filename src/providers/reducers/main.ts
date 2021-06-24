import { authReducer } from "./auth"
import { combineReducers } from "redux"
import { tweetReducer } from "./tweets"

//aca agregar todos los reducers
export const mainReducer = combineReducers({
  auth: authReducer,
  tweet: tweetReducer,
})
