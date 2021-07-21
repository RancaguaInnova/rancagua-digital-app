import React, { useEffect, useState } from "react"
import { IonContent, IonPage, useIonRouter } from "@ionic/react"
import Header from "components/Header"
import { Button, Card, Col, Layout, Row } from "antd"
import { LoginForm } from "components/LoginForm"
import { CustomCard } from "./styles"
import { getPublicKey } from "providers/api/notification"

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState(false)
  let swReg: ServiceWorkerRegistration | undefined

  const router = useIonRouter()
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/tabs/tab1", "none", "replace")
    }
  }, [isAuthenticated, router])

  const handleSubcription = async () => {
    if (navigator.serviceWorker) {
      console.log(navigator.serviceWorker)
      navigator.serviceWorker.getRegistration().then(async (registration) => {
        console.log("r", registration)
        swReg = registration

        // login()
        if (!swReg) return console.log("No hay registro de SW", swReg)
        const key = await getPublicKey()
        console.log("key", key)
        swReg.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: key,
          })
          .then((res: any) => res.toJSON())
          .then((suscripcion: any) => {
            // console.log(suscripcion);
            fetch("api/subscribe", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(suscripcion),
            })
              .then()
              .catch()
          })
      })
    }
  }
  function notificarme() {
    if (!window.Notification) {
      console.log("Este navegador no soporta notificaciones")
      return
    }

    if (Notification.permission === "granted") {
      //enviarNotificacion()
    } else if (Notification.permission === "default") {
      Notification.requestPermission(function (permission) {
        console.log(permission)

        if (permission === "granted") {
          new Notification(
            "Gracias por subscribirte a las notificaciones  de Rancagua Digital",
          )
          //  enviarNotificacion()
        }
      })
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        console.log(permission)

        if (permission === "granted") {
          new Notification(
            "Gracias por subscribirte a las notificaciones  de Rancagua Digital",
          )
          //  enviarNotificacion()
        }
      })
    }
  }

  useEffect(() => {}, [])

  return (
    <IonPage>
      <Header title="Iniciar sesión de Rancagua Digital"></Header>
      <IonContent>
        <Row justify="center">
          <Col md={12} xs={20}>
            <CustomCard>
              <LoginForm></LoginForm>
              <Button onClick={handleSubcription}> Subcription</Button>
            </CustomCard>
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default Login
