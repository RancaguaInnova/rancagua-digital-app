import React, { useEffect, useState } from "react"
import { IonContent, IonPage, useIonRouter } from "@ionic/react"
import Header from "components/Header"
import { Card, Col, Layout, Row } from "antd"
import { LoginForm } from "components/LoginForm"

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)

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
        <Row justify="center">
          <Col md={12} xs={20}>
            <Card>
              <LoginForm></LoginForm>
            </Card>
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default Login
