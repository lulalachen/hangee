import React from 'react'
import { A } from '../../devUI'

import styles from './styles/SignUpSuccess.css'

const SignUpSuccess = () => (
  <div className={styles.signUpSuccess}>
    <div className={styles.signUpSuccessModal}>
      <div>
        謝謝你註冊TimeExchange！
        確認信件已寄至填寫的信箱，請點擊信件內提供的連結啟動帳號！
      </div>
      <div>
        若未收到信件，請
        <A href="#">點此</A>
        重新發送。
      </div>
      <div>
        希望很快見到你。
      </div>
    </div>
  </div>
)

export default SignUpSuccess
