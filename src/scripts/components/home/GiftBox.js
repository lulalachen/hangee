import React from 'react'
import styles from './styles/GiftBox.css'

const CardInGiftBox = ({ handleClickCardInGiftBox }) => (
  <div
    onClick={handleClickCardInGiftBox}
    className={styles.giftcard}
  >
    Click Me
    To Read
    Birthday Card
  </div>
)

const GiftBox = ({
  handleClickCardInGiftBox,
}) => (
  <div className={styles.wrap}>
    <div className={styles.gift}>
      <CardInGiftBox handleClickCardInGiftBox={handleClickCardInGiftBox} />
      <div className={styles.gift_top}>
        <div className={styles.ribbon_right}></div>
        <div className={styles.ribbon_left}></div>
        <div className={styles.gift_box_top}></div>
        <div className={styles.gift_ribbon_left}></div>
      </div>
      <div className={styles.gift_ribbon_center}></div>
      <div className={styles.gift_box_bottom_top}></div>
      <div className={styles.gift_box_bottom}>
        <div className={styles.gift_box_bottom_ribbon} id="ribbon1"></div>
        <div className={styles.gift_box_bottom_ribbon} id="ribbon2"></div>
        <div className={styles.gift_box_bottom_ribbon} id="ribbon3"></div>
        <div className={styles.gift_box_bottom_ribbon} id="ribbon4"></div>
      </div>
    </div>
  </div>
)

export default GiftBox
