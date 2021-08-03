import React, { useEffect, useState } from "react"
import { IonContent, IonPage, useIonRouter } from "@ionic/react"
import Header from "components/Header"
import { Button, Card, Col, Layout, Row } from "antd"
import { LoginForm } from "components/LoginForm"
import { CustomCard } from "./styles"
import { getPublicKey } from "providers/api/notification"
import convertVapidKey from "convert-vapid-public-key"

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const router = useIonRouter()
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/tabs/tab1", "none", "replace")
    }
  }, [isAuthenticated, router])

  useEffect(() => {}, [])

  return (
    <IonPage>
      <Header title="Iniciar sesión de Rancagua Digital"></Header>
      <IonContent>
        <Row justify="center">
          <Col md={12} xs={20}>
            <CustomCard>
              <LoginForm></LoginForm>
            </CustomCard>
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default Login
