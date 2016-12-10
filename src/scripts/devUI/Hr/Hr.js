import React from 'react'
import { compose, pure } from 'recompose'
import c from 'classnames'

import styles from './Hr.css'

const enhance = compose(
  pure,
)

const Hr = ({ children, className }) => (
  <div className={c(styles.hrWrapper, className)}>
    <hr />
    {children}
    <hr />
  </div>
)

export default enhance(Hr)
