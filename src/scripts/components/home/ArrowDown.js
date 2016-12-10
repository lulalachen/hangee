/* eslint-disable max-len */
import React from 'react'
import c from 'classnames'
import styles from './styles/ArrowDown.css'


const ArrowDown = ({
  className,
}) => (
  <svg
    x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512"
    className={c(styles.arrow, styles.bounce, className)}
  >
    <path fill="#555555" d="M293.751,455.868c-20.181,20.179-53.165,19.913-73.673-0.595l0,0c-20.508-20.508-20.773-53.493-0.594-73.672  l189.999-190c20.178-20.178,53.164-19.913,73.672,0.595l0,0c20.508,20.509,20.772,53.492,0.595,73.671L293.751,455.868z" />
    <path fill="#555555" d="M220.249,455.868c20.18,20.179,53.164,19.913,73.672-0.595l0,0c20.509-20.508,20.774-53.493,0.596-73.672  l-190-190c-20.178-20.178-53.164-19.913-73.671,0.595l0,0c-20.508,20.509-20.772,53.492-0.595,73.671L220.249,455.868z" />
  </svg>
)

export default ArrowDown
