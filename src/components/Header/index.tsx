import {
  IonButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import React, { FC, useEffect } from "react"

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  })

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)")
    mediaQuery.addEventListener("change", (e) => {
      setMQuery(e)
    })
    return () =>
      mediaQuery.removeEventListener("change", (e) => {
        setMQuery(e)
      })
  }, [])

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="end">
          {mQuery && !mQuery.matches ? (
            <IonMenuButton />
          ) : (
            <>
              <IonButton routerLink={"/tabs/home"}>Inicio </IonButton>
              <IonButton routerLink={"/tabs/calendar"}>Calendario </IonButton>
              <IonButton routerLink={"/tabs/services"}>Servicios</IonButton>
              <IonButton routerLink={"/tabs/information"}>
                Información
              </IonButton>
              <IonButton routerLink={"/tabs/login"}>Login</IonButton>
            </>
          )}{" "}
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
