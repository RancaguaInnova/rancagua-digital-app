import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk" // middleware async functions
import { mainReducer } from "../reducers/main"
import _get from "lodash/get"

const composeEnhancers =
  (typeof window !== "undefined" &&
    _get(window, "__REDUX_DEVTOOLS_EXTENSION_COMPOSE__", null)) ||
  compose

export const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk)),
)
