import React from 'react'
import { compose, pure, defaultProps } from 'recompose'
import { Link as RRLink } from 'react-router'
import c from 'classnames'

import styles from './Link.css'

const enhance = compose(
  pure,
  defaultProps({
    kind: 'default',
  })
)

const Link = ({ to, children, kind, className }) => (
  <RRLink
    className={c(styles[kind], className)}
    to={to}
  >
    {children}
  </RRLink>
)

export default enhance(Link)
