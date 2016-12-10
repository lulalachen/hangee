import Immutable from 'immutable'
import {
  SET_USER_NAME,
  LOGIN,
} from '../actions/auth'

// Reducer example

const defaultState = new Immutable.Map({
  user: 'default',
  error: false,
})

const auth = (
  state = defaultState,
  {
    type,
    payload,
    error,
  } = {}
) => {
  switch (type) {
    case SET_USER_NAME:
      return state.set('user', payload)

    case LOGIN:
      if (error) return state.set('error', payload)
      if (payload) return state
      return state
    default:
      return defaultState
  }
}

export default auth
