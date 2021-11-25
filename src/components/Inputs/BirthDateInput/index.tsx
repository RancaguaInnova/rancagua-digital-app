import { FC } from 'react'
import { Form, Input } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'

interface BirthDateInputProps {
  placeholder?: string
  bordered?: boolean
}
export const BirthDateInput: FC<BirthDateInputProps> = (props) => {
  return (
    <Form.Item name='birthDate'>
      <Input prefix={<CalendarOutlined />} {...props} />
    </Form.Item>
  )
}
