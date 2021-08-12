import {
  IonButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import React, { FC, useEffect } from "react"
import TitleStyled from "../Title"
import "./styles.scss"
import { useHistory } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
interface HeaderProps {
  title: string
  back?: boolean
}

const Header: FC<HeaderProps> = ({ title, back = false }) => {
  const history = useHistory()

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
    <IonHeader className="header">
      <IonToolbar className="header">
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
              <IonButton routerLink={"/tabs/subcription"}>
                Subcripción
              </IonButton>

              <IonButton routerLink={"/tabs/login"}>Login</IonButton>
            </>
          )}{" "}
        </IonButtons>
        <IonTitle>
          <img src="assets/icon/logo.png" height="35" alt="Logo"></img>
        </IonTitle>
      </IonToolbar>{" "}
      <TitleStyled level={3}>
        {back && (
          <span className="back" onClick={() => history.goBack()}>
            <IoIosArrowBack></IoIosArrowBack>
          </span>
        )}
        {title}
      </TitleStyled>
    </IonHeader>
  )
}

export default Header
