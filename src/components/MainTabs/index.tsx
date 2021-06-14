import React, { FC } from "react"
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react"
import { home, calendar, cube, information } from "ionicons/icons"
import { Route, Redirect } from "react-router"

import HomePage from "../../pages/Home"
import ServicesPage from "../../pages/Services"
import CalendarPage from "../../pages/Calendar"
import InformationPage from "../../pages/Information"

const MainTabs: FC = ({}) => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact />
        <Route path="/tabs/:tab(home)" render={() => <HomePage />} />
        <Route path="/tabs/:tab(calendar)" render={() => <CalendarPage />} />
        <Route path="/tabs/:tab(services)" render={() => <ServicesPage />} />
        <Route
          path="/tabs/:tab(information)"
          render={() => <InformationPage />}
        />

        <Route
          render={() => {
            return <Redirect to="/tabs" />
          }}
        />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={home} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Calendar" href="/tabs/calendar">
          <IonIcon icon={calendar} />
          <IonLabel>Calendario</IonLabel>
        </IonTabButton>
        <IonTabButton tab="services" href="/tabs/services">
          <IonIcon icon={cube} />
          <IonLabel>Servicios</IonLabel>
        </IonTabButton>
        <IonTabButton tab="information" href="/tabs/information">
          <IonIcon icon={information} />
          <IonLabel>Información</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}
export default MainTabs
