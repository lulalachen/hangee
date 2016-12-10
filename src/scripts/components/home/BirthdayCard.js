import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import { animateScroll } from 'react-scroll'
import TypeWriter from 'react-typewriter'
import Card from '../common/Card'
import ArrowDown from '../common/ArrowDown'
import getBirthdayCardMessage from '../../message/getBirthdayCardMessage'
import styles from './styles/BirthdayCard.css'

const enhance = compose(
  withState('isTypingDone', 'updateIsTypingDone', false),
  withHandlers({
    onTypingEnd:
      ({ updateIsTypingDone }) => () => {
        updateIsTypingDone(true)
        animateScroll.scrollToBottom()
      },
    onArrowDownClick:
      ({ updateShowFinalCard }) => () => {
        updateShowFinalCard(true)
        animateScroll.scrollToBottom()
      },
  }),
)

const BirthdayCard = ({
  onTypingEnd,
  isTypingDone,
  onArrowDownClick,
}) => (
  <Card minHeight={400}>
    <h2>To 宇涵</h2>
    <TypeWriter
      fixed
      typing={0.7}
      onTypingEnd={onTypingEnd}
    >
      {getBirthdayCardMessage()}
    </TypeWriter>
    {
      isTypingDone &&
        <ArrowDown
          onClick={onArrowDownClick}
          className={styles.arrowDown}
        />
    }
  </Card>
)

export default enhance(BirthdayCard)
