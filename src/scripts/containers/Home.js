import React from 'react'
import { animateScroll } from 'react-scroll'
import { compose, withHandlers, withState } from 'recompose'
import R from 'ramda'
import BirthdayCard from '../components/home/BirthdayCard'
import GiftBoxPanel from '../components/home/GiftBoxPanel'
import CheckPasswordPanel from '../components/home/CheckPasswordPanel'
import IntroPanel from '../components/home/IntroPanel'
import FinalMessage from '../components/home/FinalMessage'
import styles from './styles/Home.css'

const BIRTHDAY_CARD_PASSWORD = 'lulaishungry'
const FINAL_PASSWORD = '致姍姍來遲的你'
const FINAL_PASSWORD_2 = '致姍姍來遲的妳'

const commonEnhance = withHandlers({
	handleClickCardInGiftBox: ({
		showBirthdayCard,
		updateShowBirthdayCard,
	}) => () => {
		if (!showBirthdayCard) updateShowBirthdayCard(true)
		animateScroll.scrollToBottom()
	},
})

const birthdayCardPasswordEnhance = compose(
	withState('showBirthdayCard', 'updateShowBirthdayCard', false),
	withState('birthdayCardPassword', 'updateBirthdayCardPassword', ''),
	withState('isBirthdayCardPasswordCorrect', 'updateIsBirthdayCardPasswordCorrect', undefined),
	withHandlers({
		updateBirthdayCardPassword: ({
			updateBirthdayCardPassword,
		}) => (e) => updateBirthdayCardPassword(e.target.value),
		checkAndForwardBirthdayCardPassword:
			({
				birthdayCardPassword,
				updateIsBirthdayCardPasswordCorrect,
			}) => () => {
				if (R.toLower(birthdayCardPassword) === BIRTHDAY_CARD_PASSWORD) {
					updateIsBirthdayCardPasswordCorrect(true)
					animateScroll.scrollToBottom()
				} else {
					updateIsBirthdayCardPasswordCorrect(false)
				}
			},
	}),
)

const finalPasswordEnhance = compose(
	withState('showFinalCard', 'updateShowFinalCard', false),
	withState('finalPassword', 'updateFinalPassword', ''),
	withState('isFinalPasswordCorrect', 'updateIsFinalPasswordCorrect', undefined),
	withHandlers({
		updateFinalPassword: ({
			updateFinalPassword,
		}) => (e) => updateFinalPassword(e.target.value),
		checkAndForwardFinalPassword:
			({
				finalPassword,
				updateIsFinalPasswordCorrect,
			}) => () => {
				if (
					finalPassword === FINAL_PASSWORD ||
						finalPassword === FINAL_PASSWORD_2
				) {
					updateIsFinalPasswordCorrect(true)
					animateScroll.scrollToBottom()
				} else {
					updateIsFinalPasswordCorrect(false)
				}
			},
	}),
)

const Home = ({
	handleClickCardInGiftBox,

	showBirthdayCard,
	birthdayCardPassword,
	updateBirthdayCardPassword,
	isBirthdayCardPasswordCorrect,
	checkAndForwardBirthdayCardPassword,

	showFinalCard,
	finalPassword,
	updateFinalPassword,
	updateShowFinalCard,
	isFinalPasswordCorrect,
	checkAndForwardFinalPassword,
}) => (
	<div className={styles.wrap}>
		<IntroPanel />

		<GiftBoxPanel
			handleClickCardInGiftBox={handleClickCardInGiftBox}
		/>

		<CheckPasswordPanel
			onSubmit={checkAndForwardBirthdayCardPassword}
			isShow={showBirthdayCard}
			password={birthdayCardPassword}
			updatePassword={updateBirthdayCardPassword}
			isPasswordCorrect={isBirthdayCardPasswordCorrect}
		>
			<h2>生日卡片</h2>
			<p>嘿嘿！跟你玩個小遊戲！</p>
			<p>你還記得那天在公園和你說的密碼嗎？</p>
			<p>想要看卡片的話就努力回想喔！</p>
			<p>(大小寫沒差喔)</p>
		</CheckPasswordPanel>

		{
			isBirthdayCardPasswordCorrect &&
				<BirthdayCard updateShowFinalCard={updateShowFinalCard} />
		}

		<CheckPasswordPanel
			onSubmit={checkAndForwardFinalPassword}
			isShow={showFinalCard}
			password={finalPassword}
			updatePassword={updateFinalPassword}
			isPasswordCorrect={isFinalPasswordCorrect}
		>
			<h2>最後的小驚喜</h2>
			<p>最後這個禮物呢</p>
			<p>要等到12/12早上才會看到</p>
			<p>記得我說過生日當天要早起嗎！</p>
			<p>12/12早上七點左右敲我拿最後的密碼</p>
		</CheckPasswordPanel>

		{
			isFinalPasswordCorrect &&
				<FinalMessage />
		}
	</div>
)

const enhance = compose(
	birthdayCardPasswordEnhance,
	finalPasswordEnhance,
	commonEnhance,
)

export default enhance(Home)
