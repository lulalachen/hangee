import React from 'react'
import c from 'classnames'
import styles from './styles/Card.css'

const Card = ({
  children,
  className,
  id,
  height,
  minHeight,
  style,
}) => (
  <div
    className={c(styles.wrap, className)}
    style={{ height, minHeight, ...style }}
    id={id}
  >
    {children}
  </div>
)

export default Card
