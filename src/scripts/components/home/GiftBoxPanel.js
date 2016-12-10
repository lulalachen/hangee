import React from 'react'
import LazyLoad from 'react-lazyload'
import Card from '../common/Card'
import GiftBox from './GiftBox'

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
    <Card minHeight={300} id="card2">
      <h2>Open the box!</h2>
      <GiftBox
        handleClickCardInGiftBox={handleClickCardInGiftBox}
      />
    </Card>
  </LazyLoad>
)

export default GiftBoxPanel
