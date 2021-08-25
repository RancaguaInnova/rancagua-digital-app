import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react"
import {
  calendar,
  cube,
  home,
  information,
  logIn,
  notifications,
} from "ionicons/icons"
import React from "react"

export const Menu = () => {
  return (
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>MENU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/tabs/home"} routerDirection="none">
              <IonIcon icon={home} slot="start" />
              <IonLabel> Inicio</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem
              button
              routerLink={"/tabs/calendar"}
              routerDirection="none"
            >
              <IonIcon icon={calendar} slot="start" />{" "}
              <IonLabel>Calendario</IonLabel>
            </IonItem>
            <IonItem
              button
              routerLink={"/tabs/services"}
              routerDirection="none"
            >
              <IonIcon icon={cube} slot="start" />

              <IonLabel>Servicios</IonLabel>
            </IonItem>
            <IonItem
              button
              routerLink={"/tabs/information"}
              routerDirection="none"
            >
              <IonIcon icon={information} slot="start" />

              <IonLabel>Información</IonLabel>
            </IonItem>
            <IonItem
              button
              routerLink={"/tabs/subscription"}
              routerDirection="none"
            >
              <IonIcon icon={notifications} slot="start" />

              <IonLabel>Suscripción</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/tabs/login"} routerDirection="none">
              <IonIcon icon={logIn} slot="start" />

              <IonLabel>Login</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}
