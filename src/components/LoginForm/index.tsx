import { Form, Input, Checkbox, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { CustomDivider } from "./styles"
export const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values)
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
            message: "Por favor ingrese su nombre de ususario!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Usuario"
          bordered={false}
        />
        <CustomDivider></CustomDivider>
      </Form.Item>

      <Form.Item
        // name="password"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su contraseña!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="contraseña"
          bordered={false}
        />
        <CustomDivider></CustomDivider>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Recordar mi contraseña</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          shape="round"
        >
          Ingresar
        </Button>
      </Form.Item>

      <Form.Item>
        <a href="">Registrarse Ahora!</a>

        <a className="login-form-forgot" href="">
          Olvide mi contraseña
        </a>
      </Form.Item>
    </Form>
  )
}
