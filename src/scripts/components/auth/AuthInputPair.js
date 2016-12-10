import React from 'react'
import { compose, pure, withHandlers } from 'recompose'
import { InputText } from '../../devUI'
import TiMail from '../../devIcon/TiMail'
import TiLock from '../../devIcon/TiLock'

import styles from './styles/AuthInputPair.css'

const enhance = compose(
  pure,
  withHandlers({
    onEmailChange: ({ value, onChange }) => e => onChange(e, {
      email: e.target.value,
      password: value.password,
    }),
    onPasswordChange: ({ value, onChange }) => e => onChange(e, {
      email: value.email,
      password: e.target.value,
    }),
  })
)

const AuthInputPair = ({ value = {}, error = {}, onEmailChange, onPasswordChange }) => (
  <div className={styles.authInputPair}>
    <InputText
      value={value.email}
      error={error.email}
      onChange={onEmailChange}
      className={styles.input}
      icon={<TiMail size={25} className={styles.inputTextIcon} />}
    />
    <InputText
      value={value.password}
      error={error.password}
      onChange={onPasswordChange}
      className={styles.input}
      type="password"
      icon={<TiLock size={25} className={styles.inputTextIcon} />}
    />
  </div>
)

export default enhance(AuthInputPair)
