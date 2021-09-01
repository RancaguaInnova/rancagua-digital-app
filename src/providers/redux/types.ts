// APPLICATION
export const GET_APPLICATION = '[Application] getApplication'
export const GET_LIST_APPLICATION = '[Application] getListApplications'

// TWEETS
export const GET_TWEET = '[Tweet] getTweet'
export const GET_LIST_TWEETS = '[Tweet] getListTweets'

// EVENTS
export const GET_EVENT = '[Event] getEvent'
export const GET_LIST_EVENTS = '[Event] getListEvents'

// AUTH
export const AUTH_LOADING = 'AUTH_LOADING'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

const types = {
  GET_APPLICATION,
  GET_LIST_APPLICATION,
  GET_TWEET,
  GET_LIST_TWEETS,
  GET_EVENT,
  GET_LIST_EVENTS,
  AUTH_LOADING,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
}
export default types
