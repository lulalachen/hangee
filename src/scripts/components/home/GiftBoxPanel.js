import React from 'react'
import LazyLoad from 'react-lazyload'
import GiftBox from './GiftBox'
import Card from './Card'

const LazyLoadPlaceHolder =
	({ id, height, minHeight }) => (
		<div id={id} style={{ height, minHeight }} />
	)

const GiftBoxPanel = ({
  handleClickCardInGiftBox,
}) => (
  <LazyLoad
    offset={-100}
    placeholder={
      <LazyLoadPlaceHolder id="card2" height={500} minHeight={500} />
    }
  >
    <Card minHeight={300}>
      <h2>Open the box!</h2>
      <GiftBox
        handleClickCardInGiftBox={handleClickCardInGiftBox}
      />
    </Card>
  </LazyLoad>
)

export default GiftBoxPanel
