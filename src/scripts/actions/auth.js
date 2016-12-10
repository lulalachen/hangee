import { createFetch, method, body } from 'http-client'
import { apiStack } from '../api'

// Action Example
export const SET_USER_NAME = 'SET_USER_NAME'

export const setUserName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  })
}

export const REGISTER = 'REGISTER'

export const register = (email, password) => dispatch => {
  dispatch({ type: REGISTER })

  return createFetch(
    apiStack,
    method('POST'),
    body(JSON.stringify({
      username: 'test user',
      email,
      password,
    }), 'application/json')
  )('/auth/register/')
  .then(({ jsonData }) => {
    dispatch({
      type: REGISTER,
      payload: jsonData,
    })

    return Promise.resolve()
  })
  .catch(err => {
    dispatch({
      type: REGISTER,
      error: true,
      payload: err,
    })

    return Promise.reject(err)
  })
}

export const LOGIN = 'LOGIN'

export const login = (email, password) => dispatch => {
  dispatch({ type: LOGIN })

  return createFetch(
    apiStack,
    method('POST'),
    body(JSON.stringify({
      email,
      password,
    }), 'application/json')
  )('/auth/login/')
  .then(({ jsonData }) => {
    dispatch({
      type: LOGIN,
      payload: jsonData,
    })
    localStorage.setItem('auth', JSON.stringify(jsonData.result))

    return Promise.resolve()
  })
  .catch(err => {
    dispatch({
      type: LOGIN,
      error: true,
      payload: err,
    })

    return Promise.reject(err)
  })
}

export const EMAIL_VERIFY = 'EMAIL_VERIFY'

export const verify = eToken => dispatch => {
  dispatch({ type: EMAIL_VERIFY })

  return createFetch(
    apiStack,
    method('POST'),
    body(JSON.stringify({ eToken }), 'application/json')
  )('/auth/verify/')
  .then(({ jsonData }) => {
    dispatch({
      type: EMAIL_VERIFY,
      payload: jsonData,
    })

    return Promise.resolve(jsonData)
  })
  .catch(({ jsonData }) => {
    dispatch({
      type: EMAIL_VERIFY,
      error: true,
      payload: jsonData,
    })

    return Promise.reject(jsonData)
  })
}
