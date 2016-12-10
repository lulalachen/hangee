import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from '../reducers/index'

import styles from './styles/Layout.css'

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const AuthLayout = ({ children }) => (
	<Provider store={store}>
		<div className={styles.base}>
			{children}
		</div>
	</Provider>
)

export default AuthLayout
