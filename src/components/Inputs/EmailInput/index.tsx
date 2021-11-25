import { FC } from 'react'
import { Form, Input } from 'antd'
import { MailOutlined } from '@ant-design/icons'

interface EmailInputProps {
  placeholder?: string
  bordered?: boolean
}
export const EmailInput: FC<EmailInputProps> = (props) => {
  return (
    <Form.Item
      name='email'
      rules={[
        {
          required: true,
          message: 'Por favor ingrese su email'
        }
      ]}
    >
      <Input prefix={<MailOutlined />} {...props} />
    </Form.Item>
  )
}
