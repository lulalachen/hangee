import React from 'react'
import { compose, pure, withState, withHandlers } from 'recompose'
import { Button, Link } from '../../devUI'
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl'
import AuthInputPair from './AuthInputPair'

import styles from './styles/SignInForm.css'

const messages = defineMessages({
  pleaseEnterEmail: {
    id: 'signIn.pleaseEnterEmail',
    defaultMessage: '請輸入帳號',
  },
  pleaseEnterPassword: {
    id: 'signIn.pleaseEnterPassword',
    defaultMessage: '請輸入密碼',
  },
})

const enhance = compose(
  pure,
  injectIntl,
  withState('authValue', 'setAuthValue', {}),
  withHandlers({
    onAuthValueChange: ({ setAuthValue }) => (e, value) => setAuthValue(value),
    onSignInClick: ({ onSignIn, authValue, setError, intl }) => () => {
      const formatMessage = intl.formatMessage
      if (!authValue.email) {
        setError({ email: formatMessage(messages.pleaseEnterEmail) })
      } else if (!authValue.password) {
        setError({ password: formatMessage(messages.pleaseEnterPassword) })
      } else onSignIn(authValue.email, authValue.password)
    },
  })
)

const SignInForm = ({ authValue, error, onAuthValueChange, onSignInClick }) => (
  <div className={styles.signInForm}>
    <AuthInputPair
      value={authValue}
      error={error}
      onChange={onAuthValueChange}
    />
    <div className={styles.optionWrap}>
    <Link to="#" kind="primary">
      <FormattedMessage
        id="signIn.forgotPassword"
        defaultMessage="忘記密碼？"
      />
    </Link>
    </div>
    <Button
      size="large"
      kind="default"
      onClick={onSignInClick}
    >
      <FormattedMessage
        id="signIn.login"
        defaultMessage="登入"
      />
    </Button>
  </div>
)

export default enhance(SignInForm)
