import React from 'react'
import { Form, Input as TextBox } from 'antd'

const Input = ({ label, type, placeholder }) => {
  return (
    <Form.Item label={label} rules={[{ type: `${type && type}` }]} required>
      <TextBox placeholder={placeholder} allowClear />
    </Form.Item>
  )
}

export default Input
