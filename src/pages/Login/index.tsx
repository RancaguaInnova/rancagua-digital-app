import React, { useEffect, useState } from "react"
import { IonContent, IonPage, useIonRouter } from "@ionic/react"
import Header from "components/Header"
import { Form, Input, Button, Checkbox, Row, Col } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values)
  }
  const router = useIonRouter()
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/tabs/tab1", "none", "replace")
    }
  }, [isAuthenticated, router])

  const handleLogin = () => {
    // login()
  }

  return (
    <IonPage>
      <Header title="Iniciar Session"></Header>
      <IonContent>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={20}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Ingresar
                </Button>
                Or <a href="">Registrarse Ahora!</a>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default Login
