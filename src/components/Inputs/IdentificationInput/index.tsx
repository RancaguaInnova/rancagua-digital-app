import { FC } from 'react'
import { Form, Input } from 'antd'
import { AuditOutlined } from '@ant-design/icons'

interface IdentificationInputProps {
  placeholder?: string
  bordered?: boolean
}
export const IdentificationInput: FC<IdentificationInputProps> = (props) => {
  return (
    <Form.Item name='gender'>
      <Form.Item
        name='identification'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su RUT'
          }
        ]}
      >
        <Input prefix={<AuditOutlined />} type='text' {...props} />
      </Form.Item>
    </Form.Item>
  )
}
