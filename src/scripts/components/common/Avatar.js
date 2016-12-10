import React from 'react'
import styles from './styles/Avatar.css'

const Avatar = ({
	src,
}) => (
	<div
		className={styles.avatar}
		style={{
			backgroundImage: `url('${src}')`,
		}}
	/>
)

export default Avatar
