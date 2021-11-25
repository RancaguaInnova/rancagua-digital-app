import { FC } from 'react'
import { Form, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

interface GenderInputProps {
  placeholder?: string
  bordered?: boolean
}
export const GenderInput: FC<GenderInputProps> = (props) => {
  return (
    <Form.Item name='gender'>
      <Input prefix={<UserOutlined />} {...props} />
    </Form.Item>
  )
}
