import React from 'react'
import c from 'classnames'
import styles from './styles/Button.css'

const Button = ({
  children,
  className,
  onClick,
}) => (
  <button
    className={c(styles.base, className)}
    onClick={onClick}
  >
    <div>{children}</div>
  </button>
)

export default Button
