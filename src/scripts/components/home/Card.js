import React from 'react'
import styles from './styles/Card.css'

const Card = ({ children }) => (
  <div className={styles.wrap}>
    {children}
  </div>
)

export default Card
