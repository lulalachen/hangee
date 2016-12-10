import React from 'react'
import { compose, pure, defaultProps } from 'recompose'

const enhance = compose(
  pure,
  defaultProps({
    size: 18,
  })
)
/* eslint max-len: 0 */
const TiMail = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 17"
    fill="currentColor"
    className={className}
  >
    <polygon points="12 7.7962 24 1.7629 24 0 0 0 0 1.7629" />
    <polygon points="12 9.80837115 12 9.8214826 11.9845714 9.81656581 11.9708571 9.8214826 12.0017143 9.80837115 0 4 0 17 24 17 24 4" />
  </svg>
)

export default enhance(TiMail)
