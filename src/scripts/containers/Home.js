import React from 'react'
import TypeWriter from 'react-typewriter'
import { animateScroll } from 'react-scroll'
import { compose, withHandlers, withState } from 'recompose'
import GiftBoxPanel from '../components/home/GiftBoxPanel'
import Card from '../components/home/Card'
import IntroPanel from '../components/home/IntroPanel'
import styles from './styles/Home.css'

const enhance = compose(
	withState('showBirthdayCard', 'updateShowBirthdayCard', false),
	withHandlers({
		handleClickCardInGiftBox: ({
			showBirthdayCard,
			updateShowBirthdayCard,
		}) => () => {
			if (!showBirthdayCard) updateShowBirthdayCard(true)
			animateScroll.scrollToBottom()
		},
	})
)

const Home = ({
	handleClickCardInGiftBox,
	showBirthdayCard,
}) => (
	<div className={styles.wrap}>
		<IntroPanel />

		<GiftBoxPanel
			handleClickCardInGiftBox={handleClickCardInGiftBox}
		/>

		<Card
			id="birthdayCard"
			style={{
				display: showBirthdayCard ? 'flex' : 'none',
			}}
		>
			This is birthday card!!
		</Card>

	</div>
)

export default enhance(Home)
