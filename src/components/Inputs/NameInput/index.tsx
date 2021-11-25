import { FC } from 'react'
import { Form, Input } from 'antd'
import { IdcardOutlined } from '@ant-design/icons'

interface NameInputProps {
  placeholder?: string
  bordered?: boolean
}
export const NameInput: FC<NameInputProps> = (props) => {
  return (
    <Form.Item
      name='name'
      rules={[
        {
          required: true,
          message: 'Por favor ingrese su Nombre'
        }
      ]}
    >
      <Input prefix={<IdcardOutlined />} {...props} />
    </Form.Item>
  )
}
