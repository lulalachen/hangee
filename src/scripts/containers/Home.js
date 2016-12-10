import React from 'react'
import Card from '../components/home/Card'
import ArrowDown from '../components/home/ArrowDown'
import BirthdayCake from '../components/home/BirthdayCake'
import styles from './styles/Home.css'

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

const imageSrc = process.env.NODE_ENV === 'production'
	? 'images/avatar.jpg'
	: 'images/lulalaAvatar.jpg'

const Home = () => (
	<div className={styles.wrap}>
		<Card>
			<Avatar src={imageSrc} />
			<span className={styles.homeCardText}>
				Happy Birthday Hannah
			</span>
			<BirthdayCake />
			<ArrowDown className={styles.arrowDown} />
		</Card>
	</div>
)

export default Home
