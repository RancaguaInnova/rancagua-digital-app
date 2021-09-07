import { FC } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { AuditOutlined } from '@ant-design/icons'
import { Subtitle, Error } from './styles'

interface IdentificationFormProps {
  onChange: any
}

export const IdentificationForm: FC<IdentificationFormProps> = ({
  onChange
}) => {
  return (
    <>
      <Form.Item
        name='identification'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su RUT'
          }
        ]}
      >
        <Input
          prefix={<AuditOutlined />}
          type='text'
          placeholder='Ingrese su RUT'
          bordered={false}
        />
      </Form.Item>
    </>
  )
}
