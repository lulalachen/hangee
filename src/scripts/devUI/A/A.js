import React from 'react'

import styles from './A.css'

const A = ({ children, href }) => (
  <a href={href} className={styles.a}>
    {children}
  </a>
)

export default A
