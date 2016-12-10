import React from 'react'
import { compose, pure, defaultProps } from 'recompose'
import c from 'classnames'

import styles from './Button.css'

const enhance = compose(
  pure,
  defaultProps({
    onClick: () => {},
  })
)

const Button = ({ children, size, kind, className, onClick }) => (
  <button
    className={c(styles[size], styles[kind], className)}
    onClick={onClick}
  >
    <div>{children}</div>
  </button>
)

export default enhance(Button)
