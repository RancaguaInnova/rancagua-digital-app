import { FC } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { CustomCol, Error } from './styles'

interface PersonalInfoFormProps {
  onSubmit: any
  loading?: boolean
  error?: string
}

export const PersonalInfoForm: FC<PersonalInfoFormProps> = ({
  onSubmit,
  loading = false,
  error = ''
}) => {
  const [form] = Form.useForm()
  return (
    <Form
      name="normal_login"
      form={form}
      className="login-form"
      initialValues={{ email: '', password: '' }}
      onFinish={onSubmit}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        rules={[
          { type: 'email', message: 'Ingrese un email válido' },
          {
            required: true,
            message: 'Por favor ingrese su email'
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          bordered={false}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su contraseña!'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
          bordered={false}
        />
      </Form.Item>

      <Form.Item>
        <Row justify="center">
          <Col span="8" md="4" lg="4">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              shape="round"
              disabled={loading}
              loading={loading}
              block
            >
              Ingresar
            </Button>
          </Col>
        </Row>
      </Form.Item>

      {/* <Row justify="center">
        {error !== '' &&
          <CustomCol span="24">
            <Error>
              {error}
            </Error>
          </CustomCol>}
        <CustomCol span="24">
          <a href="">Crear una cuenta</a>
        </CustomCol>
        <CustomCol span="24">
          <a href="">Olvide mi contraseña</a>
        </CustomCol>
      </Row> */}
    </Form>
  )
}
