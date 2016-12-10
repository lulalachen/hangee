import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './containers/Layout'
import Home from './containers/Home'

export default () => (
  <Route>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
    </Route>
  </Route>
)
