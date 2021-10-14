import React from 'react'
import { Form, Input as TextBox } from 'antd'

const TextArea = ({ label, placeholder }) => {
  return (
    <Form.Item label={label} required>
      <TextBox.TextArea placeholder={placeholder} allowClear showCount maxLength={240} />
    </Form.Item>
  )
}

export default TextArea
