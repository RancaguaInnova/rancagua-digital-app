import { IonContent, IonPage } from "@ionic/react"
import { Row } from "antd"
import React, { useEffect } from "react"
import Header from "components/Header"
import { Application } from "interfaces/applications"
import "./styles.scss"
import { useLocation } from "react-router-dom"
import _get from "lodash/get"
const AppViewPage: React.FC = () => {
  const location = useLocation()
  const estado = location.state || null

  const app: Application = _get(estado, "app", null)

  return (
    <>
      {app && (
        <IonPage>
          <Header title={app.name} back={true}></Header>
          <IonContent fullscreen>
            <iframe src={app.applicationURL} frameBorder="0"></iframe>
          </IonContent>{" "}
        </IonPage>
      )}
    </>
  )
}

export default AppViewPage
