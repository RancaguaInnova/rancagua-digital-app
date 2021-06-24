import { IonApp, IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

import "antd/dist/antd.css" // or 'antd/dist/antd.less'

/* Theme variables */
import "./theme/variables.scss"
import MainTabs from "./components/MainTabs"
import { Route, Redirect } from "react-router"
import { Menu } from "./components/Menu"
import Home from "./pages/Home"
import ServicesPage from "./pages/Services"
import CalendarPage from "./pages/Calendar"
import InformationPage from "./pages/Information"

import { useEffect } from "react"
import { Provider } from "react-redux"
import { store } from "./providers/store"
const App: React.FC = () => {
  return (
    <IonApp>
      <Provider store={store}>
        <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/tabs" component={MainTabs} />
            <Route exact path="/" render={() => <Redirect to="/tabs" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </Provider>
    </IonApp>
  )
}

export default App
