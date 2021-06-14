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
    mediaQuery.addListener(setMQuery)

    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery)
  }, [])

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="end">
          {mQuery && !mQuery.matches ? (
            <IonMenuButton />
          ) : (
            <>
              <IonButton routerLink={"/home"}>Home </IonButton>
              <IonButton routerLink={"/tab2"}>One </IonButton>
              <IonButton routerLink={"/tab3"}>Two</IonButton>
            </>
          )}{" "}
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
