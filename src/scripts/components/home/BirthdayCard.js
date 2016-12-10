import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import { animateScroll } from 'react-scroll'
import TypeWriter from 'react-typewriter'
import Card from '../common/Card'
import ArrowDown from '../common/ArrowDown'
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
      typing={1}
      onTypingEnd={onTypingEnd}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
