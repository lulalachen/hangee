import React from 'react'
import { compose, pure, withState, withHandlers } from 'recompose'
import { FormattedMessage } from 'react-intl'
import { Button } from '../../devUI'
import AuthInputPair from './AuthInputPair'

import styles from './styles/SignUpForm.css'
import { isNil, test } from 'ramda'

const isEmail = test(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/)

const validateEmailPassword = (email, password) => {
  if (isNil(email)) {
    return {
      email: <FormattedMessage
        id="signIn.pleaseEnterEmail"
        defaultMessage="請輸入帳號"
      />,
    }
  }
  if (!isEmail(email)) {
    return {
      email: <FormattedMessage
        id="signUp.emailFormatError"
        defaultMessage="Email格式有誤"
      />,
    }
  }
  if (isNil(password)) {
    return {
      email: <FormattedMessage
        id="signIn.pleaseEnterPassword"
        defaultMessage="請輸入密碼"
      />,
    }
  }
  if (password.length < 8 || password.length > 15) {
    return {
      email: <FormattedMessage
        id="signUp.passwordFormatError"
        defaultMessage="密碼需為8至15字元"
      />,
    }
  }
  return false
}

const enhance = compose(
  pure,
  withState('authValue', 'setAuthValue', {}),
  withHandlers({
    onAuthValueChange: ({ setAuthValue }) => (e, value) => setAuthValue(value),
    onSignUpClick: ({ onSignUp, authValue, setError }) => () => {
      const { email, password } = authValue
      const error = validateEmailPassword(email, password)
      if (error) setError(error)
      else onSignUp(email, password)
    },
  })
)

const SignUpForm = ({
  authValue,
  onAuthValueChange,
  onSignUpClick,
  error,
}) => (
  <div className={styles.signUpForm}>
    <AuthInputPair
      value={authValue}
      error={error}
      onChange={onAuthValueChange}
    />
    <Button
      size="large"
      kind="default"
      onClick={onSignUpClick}
    >
      <FormattedMessage
        id="signUp.register"
        defaultMessage="信箱註冊"
      />
    </Button>
  </div>
)

export default enhance(SignUpForm)
