import { Form, Input, Checkbox, Button, Row, Col } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { CustomCol, CustomDivider } from './styles'
export const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        // name="username"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su nombre de ususario!'
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Usuario"
          bordered={false}
        />
        <CustomDivider />
      </Form.Item>

      <Form.Item
        // name="password"
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
          placeholder="contraseña"
          bordered={false}
        />
        <CustomDivider />
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
          <CustomCol span="12">
            <a href="">Registrarse Ahora!</a>
          </CustomCol>
          <CustomCol span="12">
            <a href="">Olvide mi contraseña</a>
          </CustomCol>
        </Row>
      </Form.Item>
    </Form>
  )
}
