import React from 'react'
import Card from '../common/Card'

const dest = new Date('2016-12-12 20:00:00')
const now = new Date()
const isTimeDue = now > dest

const FinalMessage = () => (
  <Card minHeight={150}>
    {
      isTimeDue
      ? <span>
          <h2>宇涵！生日快樂！</h2>
          <p>打開窗戶看看吧 :D</p>
        </span>
      : <span>
          <h2>嘿嘿！時間還沒到喔</h2>
          <p>晚上就知道了 :D</p>
        </span>
    }
  </Card>
)

export default FinalMessage
