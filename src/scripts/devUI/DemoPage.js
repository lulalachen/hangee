import React from 'react'
import InputText from './InputText/InputText'

const Demo = () => (
  <div style={{ padding: 20, background: '#FFFFFF' }}>
    <h2>{'<InputText />'}</h2>
    <InputText icon={<div>Icon</div>} />
    <InputText error={88888888} />
  </div>
)

export default Demo
