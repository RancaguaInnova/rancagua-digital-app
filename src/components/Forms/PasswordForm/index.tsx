import { FC } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Subtitle, Error } from './styles'

interface PasswordFormProps {
  onChange: any
  showTitle: boolean
}

export const PasswordForm: FC<PasswordFormProps> = ({
  onChange,
  showTitle = false
}) => {
  return (
    <>
      {showTitle && <Subtitle>Contraseña</Subtitle>}
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su contraseña!'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Contraseña'
          bordered={false}
        />
      </Form.Item>
      <Form.Item
        name='password2'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su contraseña!'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Repetir Contraseña'
          bordered={false}
        />
      </Form.Item>
    </>
  )
}
