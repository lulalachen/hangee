import React from 'react'
import { compose, mapProps } from 'recompose'
import { connect } from 'react-redux'
import { setUserName } from '../actions/auth'

import styles from './styles/Page.css'

const enhance = compose(
  connect(
    ({ auth }) => ({ auth }),
    { setUserName }
  ),
  mapProps(props => ({
    onButtonClick: () => props.setUserName('abel'),
    ...props,
  }))
)

const Page = ({ auth = {}, onButtonClick }) => (
	<div>
		Page
		<div className={styles.test}>
			css-module test
		</div>
    <button onClick={onButtonClick}>Set User Name To 'abel'</button>
    <br />
    Name: {auth.user}
	</div>
)

export default enhance(Page)
