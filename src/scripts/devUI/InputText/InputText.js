import React from 'react'
import c from 'classnames'
import { compose, pure, defaultProps } from 'recompose'

import styles from './InputText.css'

const enhance = compose(
  pure,
  defaultProps({
    value: '',
    onChange: () => {},
  })
)

const InputText = ({ className, type, icon, value, onChange, error }) => (
  <div
    className={c(
        styles.wrap,
        className
      )}
  >
    <div className={styles.inputWrap}>
      <input
        type={type || 'text'}
        className={c(
          styles.inputText,
          icon && styles.withIcon,
          error && styles.error,
        )}
        value={value}
        onChange={onChange}
      />
      {
        icon &&
          <div className={styles.iconWrap}>
            {icon}
          </div>
      }
    </div>
    {
      error &&
        <div className={styles.errorMessage}>{error}</div>
    }
  </div>
)

export default enhance(InputText)
