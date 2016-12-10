import React from 'react'
import { Link } from 'react-scroll'
import Avatar from '../common/Avatar'
import Card from '../common/Card'
import ArrowDown from '../common/ArrowDown'
import BirthdayCake from './BirthdayCake'
import styles from './styles/IntroPanel.css'

const imageSrc = process.env.NODE_ENV === 'production'
	? 'images/avatar.jpg'
	: 'images/lulalaAvatar.jpg'

const IntroPanel = () => (
  <Card>
    <Avatar src={imageSrc} />
    <span className={styles.homeCardText}>
      Joyeux Annivarsaire
      <br />
      Hannah
    </span>
    <BirthdayCake />
    <Link
      spy smooth
      duration={1000}
      to="card2"
    >
      <ArrowDown className={styles.arrowDown} />
    </Link>
  </Card>
)

export default IntroPanel
