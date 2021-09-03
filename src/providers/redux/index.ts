import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // middleware async functions
import { composeWithDevTools } from 'redux-devtools-extension'
import { mainReducer } from './reducers/main'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(mainReducer, composedEnhancer)
