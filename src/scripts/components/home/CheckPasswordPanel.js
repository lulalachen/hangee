import React from 'react'
import R from 'ramda'
import Card from '../common/Card'
import Button from '../common/Button'
import styles from './styles/CheckPasswordPanel.css'

const CheckPasswordPanel = ({
  children,
  onSubmit,
  isShow,
  password,
  updatePassword,
  inputBoxBorderColor,
  inputBoxStyle,
  isPasswordCorrect,
}) => {
  const errorStyle = R.ifElse(
    R.isNil,
    R.always(null),
    R.ifElse(
      R.identity,
      R.always(styles.correct),
      R.always(styles.error)
    )
  )(isPasswordCorrect)

  return (
    <Card
      id="birthdayCard"
      style={{
        display: isShow ? 'flex' : 'none',
      }}
    >
      {children}
      <br />
      <input
        type="text"
        value={password}
        onChange={updatePassword}
        className={errorStyle}
        style={{
          inputBoxBorderColor,
          ...inputBoxStyle,
        }}
      />
      {
        errorStyle === styles.error &&
          <p className={styles.errorMessage}>錯了唷！</p>
      }
      <Button
        onClick={onSubmit}
        size="default"
      >
        submit
      </Button>
    </Card>
  )
}
export default CheckPasswordPanel
