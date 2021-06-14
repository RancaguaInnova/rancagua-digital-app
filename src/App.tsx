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

/* Theme variables */
import "./theme/variables.scss"
import MainTabs from "./components/MainTabs"
import { Route, Redirect } from "react-router"
import { Menu } from "./components/Menu"
import Home from "./pages/Home"
import ServicesPage from "./pages/Services"
import CalendarPage from "./pages/Calendar"
import InformationPage from "./pages/Information"

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/*       <MainTabs></MainTabs>
       */}
      <Menu />
      <IonRouterOutlet id="main">
        <Route path="/tabs" component={MainTabs} />
        <Route path="/home" component={Home} exact={true} />
        <Route path="/calendar" component={CalendarPage} exact={true} />
        <Route path="/services" component={ServicesPage} exact={true} />
        <Route path="/information" component={InformationPage} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
