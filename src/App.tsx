import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

/* Theme variables */
import './theme/theme.scss'
import './index.scss'
import Routes from './app-routes'
import { Route, Redirect } from 'react-router'
import { Menu } from './components/Menu'
import { useDispatch } from 'react-redux'

import { loadSession } from 'providers/redux/actions/auth'
import VerifyVersion from 'components/CheckVersion'
import { useEffect, useState } from 'react'

const versionAndroid = '1.0'
const versionIos = '1.0'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const [AlertIos, setAlertIos] = useState(false)
  const [AlertAndroid, setAlertAndroid] = useState(false)

  useEffect(() => {
    dispatch(loadSession())
    VerifyVersion(setAlertIos, setAlertAndroid, versionAndroid, versionIos)
  }, [])

  console.log('AlertIos', AlertIos)
  console.log('AlertAndroid', AlertAndroid)

  return (
    <IonApp>
      <IonReactRouter>
        <Menu />
        <IonRouterOutlet id="main">
          <Route path="/tabs" component={Routes} />
          <Route exact path="/" render={() => <Redirect to="/tabs" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
