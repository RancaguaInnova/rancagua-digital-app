import { FC } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { PasswordForm } from 'components/Forms/PasswordForm'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { CustomCol, Error } from './styles'

interface PersonalInfoFormProps {
  onSubmit: any
  onChangeIdentification?: any
  loading?: boolean
  error?: string
  profile: any
}

export const PersonalInfoForm: FC<PersonalInfoFormProps> = ({
  onSubmit,
  loading = false,
  error = '',
  profile = null
}) => {
  const [form] = Form.useForm()

  const onChangePassword = (newPassword: string) => {
    console.log('on change pass', newPassword)
  }

  return (
    <Form
      name='normal_login'
      form={form}
      className='login-form'
      initialValues={{ email: '', password: '' }}
      onFinish={onSubmit}
      scrollToFirstError
    >
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
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Ingrese su RUT'
          bordered={false}
        />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su email'
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Ingrese su email'
          bordered={false}
        />
      </Form.Item>

      <PasswordForm onChange={onChangePassword} />

      <Form.Item>
        <Row justify='center'>
          <Col span='8' md='4' lg='4'>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              shape='round'
              disabled={loading}
              loading={loading}
              block
            >
              Guardar
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  )
}
