import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { compose, pure, withState, withHandlers } from 'recompose'
import { pick, equals } from 'ramda'
import { FormattedMessage, injectIntl } from 'react-intl'
import { login } from '../actions/auth'
import { Button, Hr, Link } from '../devUI'
import TiFB from '../devIcon/TiFB'
import SignInForm from '../components/auth/SignInForm'

import styles from './styles/SignIn.css'

const signInInformation = (
  <div className={styles.signInInformation}>
    <FormattedMessage
      id="signIn.noAccount"
      defaultMessage="還沒有帳號嗎？"
    />
    <Link to="signup" kind="default">
      <FormattedMessage
        id="signIn.createOne"
        defaultMessage="創一個！"
      />
    </Link>
  </div>
)

const enhance = compose(
  pure,
  connect(
    pick(['auth']),
    { login }
  ),
  injectIntl,
  withState('error', 'setError', false),
  withHandlers({
    onSignIn: ({ setError, intl, ...otherProps }) => (email, password) =>
      otherProps.login(email, password)
      .then(() => browserHistory.push('/signinsuccess'))
      .catch(({ jsonData: { message } }) => {
        const formatMessage = intl.formatMessage
        if (equals(message, 'User not found')) {
          setError({ email: formatMessage({
            id: 'signIn.userNotFound',
            defaultMessage: '找不到使用者',
          }) })
        } else if (equals(message, 'Wrong password')) {
          setError({ password: formatMessage({
            id: 'signIn.passwordError',
            defaultMessage: '密碼錯誤',
          }) })
        } else if (equals(message, 'User unverified, please verify through email')) {
          setError({ password: formatMessage({
            id: 'signIn.verificationUncomplete',
            defaultMessage: '帳號尚未認證，請收取Email並完成認證程序',
          }) })
        } else setError({ email: message })
      }),
  }),
)

const SignIn = ({ onSignIn, error, setError }) => (
  <div className={styles.base}>
    <div className={styles.signInContainer}>
      <div className={styles.signInModal}>
        <Button
          size="large"
          kind="fb"
          className={styles.fbSignInButton}
        >
          <div className={styles.fbIconWrap}>
            <TiFB size={12} />
          </div>
          <FormattedMessage
            id="signIn.fbLogin"
            defaultMessage="透過Facebook登入"
          />
        </Button>
        <Hr>
          <div className={styles.hrChildren}>
            <FormattedMessage
              id="signIn.or"
              defaultMessage="或"
            />
          </div>
        </Hr>
        <SignInForm
          onSignIn={onSignIn}
          error={error}
          setError={setError}
        />
      </div>
      {signInInformation}
    </div>
  </div>
)

export default enhance(SignIn)
