import React, { useEffect, useState } from "react"
import { IonContent, IonPage } from "@ionic/react"
import Header from "components/Header"
import { Col, Row } from "antd"
import { LoginBox } from "containers/LoginBox"
interface LoginProps { }

const Login: React.FC<LoginProps> = () => {



  return (
    <IonPage>
      <Header title="Iniciar sesión de Rancagua Digital" />
      <IonContent>
        <Row justify="center">
          <Col md={12} xs={20}>
            <LoginBox />
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default Login
