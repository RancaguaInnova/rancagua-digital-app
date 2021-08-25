import { FC } from 'react'
import { Form, Input, Checkbox, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { CustomCol, CustomDivider } from './styles'

interface LoginFormProps {
  onSubmit: any
}

export const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm()
  return (
    <Form
      name="normal_login"
      form={form}
      className="login-form"
      initialValues={{ email: '', password: '' }}
      onFinish={(values: any) => {
        console.log('values!', values)
      }}
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
              block
            >
              Ingresar
            </Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item>
        <Row justify="center">
          <CustomCol span="24">
            <a href="">Crear una cuenta</a>
          </CustomCol>
          <CustomCol span="24">
            <a href="">Olvide mi contraseña</a>
          </CustomCol>
        </Row>
      </Form.Item>
    </Form>
  )
}
