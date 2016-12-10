import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './containers/Layout'
import Home from './containers/Home'
import SignIn from './containers/SignIn'
import SignInSuccess from './components/auth/SignInSuccess'

const checkToken = (nextState, replace) => {
  const auth = JSON.parse(localStorage.getItem('auth')) || {}
  const token = auth.token

  if (!token) {
    replace('/signin')
  }
}

export default () => (
  <Route>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="signin" component={SignIn} />
      <Route
        path="signinsuccess"
        component={SignInSuccess}
        onEnter={checkToken}
      />
    </Route>
  </Route>
)
