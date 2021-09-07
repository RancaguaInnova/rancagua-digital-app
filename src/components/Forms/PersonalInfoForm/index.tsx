import { FC } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { PasswordForm } from 'components/Forms/PasswordForm'
import { ContactInformationForm } from 'components/Forms/ContactInformationForm'
import { IdentificationForm } from 'components/Forms/IdentificationForm'
import {
  MailOutlined,
  IdcardOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons'
import { Subtitle } from './styles'

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
  profile = null,
  onChangeIdentification = () => {}
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
      <Subtitle>Información Personal</Subtitle>
      <Form.Item
        name='name'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su Nombre'
          }
        ]}
      >
        <Input
          prefix={<IdcardOutlined />}
          placeholder='Ingrese su Nombre'
          bordered={false}
        />
      </Form.Item>
      <Form.Item
        name='lastName'
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su Apellido'
          }
        ]}
      >
        <Input
          prefix={<IdcardOutlined />}
          placeholder='Ingrese su Apellido'
          bordered={false}
        />
      </Form.Item>
      <IdentificationForm onChange={onChangeIdentification} />

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
          prefix={<MailOutlined />}
          placeholder='Ingrese su email'
          bordered={false}
        />
      </Form.Item>

      <Form.Item name='birthDate'>
        <Input
          prefix={<CalendarOutlined />}
          placeholder='Ingrese su Fecha de Nacimiento'
          bordered={false}
        />
      </Form.Item>
      <Form.Item name='gender'>
        <Input
          prefix={<UserOutlined />}
          placeholder='Género'
          bordered={false}
        />
      </Form.Item>

      <ContactInformationForm showTitle />

      <PasswordForm onChange={onChangePassword} showTitle />
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
