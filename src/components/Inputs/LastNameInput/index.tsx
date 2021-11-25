import { FC } from 'react'
import { Form, Input } from 'antd'
import { IdcardOutlined } from '@ant-design/icons'

interface LastNameInputProps {
  placeholder?: string
  bordered?: boolean
}
export const LastNameInput: FC<LastNameInputProps> = (props) => {
  return (
    <Form.Item
      name='lastname'
      rules={[
        {
          required: true,
          message: 'Por favor ingrese su Apellido'
        }
      ]}
    >
      <Input prefix={<IdcardOutlined />} {...props} />
    </Form.Item>
  )
}
