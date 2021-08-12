import React, { FC, useEffect } from "react"
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
import styled from "styled-components"

import HomePage from "pages/Home"
import ServicesPage from "pages/Services"
import CalendarPage from "pages/Calendar"
import InformationPage from "pages/Information"
import LoginPage from "pages/Login"
import SubcriptionPage from "pages/Subcription"
import AppViewPage from "pages/AppView"

export const IonTabBarStyled = styled(IonTabBar)`
  background-color: rgba(255, 255, 255, 0.15);
`

const MainTabs: FC = ({}) => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  })

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)")
    mediaQuery.addEventListener("change", (e) => {
      setMQuery(e)
    })

    // this is the cleanup function to remove the listener
    return () =>
      mediaQuery.removeEventListener("change", (e) => {
        setMQuery(e)
      })
  }, [])

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
        <Route path="/tabs/:tab(login)" render={() => <LoginPage />} />
        <Route
          path="/tabs/:tab(subcription)"
          render={() => <SubcriptionPage />}
        />
        <Route path="/tabs/:tab(appView)" render={() => <AppViewPage />} />

        <Route
          render={() => {
            return <Redirect to="/tabs" />
          }}
        />
      </IonRouterOutlet>

      {mQuery && !mQuery.matches ? (
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
      ) : (
        <IonTabBar></IonTabBar>
      )}
    </IonTabs>
  )
}
export default MainTabs
