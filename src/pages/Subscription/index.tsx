import React, { useEffect, useState } from 'react'
import { IonContent, IonItem, IonLabel, IonPage, IonToggle } from '@ionic/react'
import Header from 'components/Header'
import { Col, Row } from 'antd'
import { CustomCard } from './styles'
import {
  getPublicKey,
  addSubscription,
  addSubscriptionApp
} from 'providers/api/notification'
import convertVapidKey from 'convert-vapid-public-key'
import { ToggleChangeEventDetail } from '@ionic/core'
import { Capacitor } from '@capacitor/core'

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token
} from '@capacitor/push-notifications'
import { Toast } from '@capacitor/toast'
import { AppStorage } from 'providers/storage'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  let swReg: ServiceWorkerRegistration | undefined
  const isAvailable = Capacitor.isPluginAvailable('PushNotifications')
  const [checked, setChecked] = useState(false)
  const [notifytoken, setNotify] = useState('')

  useEffect(() => {
    async function setv() {
      let check = (await AppStorage.getItem('check')) === 'true' || false
      setChecked(check)
    }
    setv()
  }, [])

  const register = () => {
    console.log('Initializing HomePage')

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register()

    PushNotifications.addListener('registration', async (token: Token) => {
      try {
        let respuesta = await addSubscriptionApp(token.value)
      } catch (error) {
        showToast('error' + error)
      }
      showToast('Push registro exitoso')
    })

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error))
    })

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        setnotifications(notifications => [
          ...notifications,
          {
            id: notification.id,
            title: notification.title,
            body: notification.body,
            type: 'foreground'
          }
        ])
      }
    )
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        setnotifications(notifications => [
          ...notifications,
          {
            id: notification.notification.data.id,
            title: notification.notification.data.title,
            body: notification.notification.data.body,
            type: 'action'
          }
        ])
      }
    )
  }

  const nullEntry: any[] = []
  const [notifications, setnotifications] = useState(nullEntry)

  const showToast = async (msg: string) => {
    await Toast.show({
      text: msg
    })
  }

  const handleSubcription = async (e: CustomEvent<ToggleChangeEventDetail>) => {
    setChecked(e.detail.checked)
    AppStorage.setItem('check', e.detail.checked.toString())
    if (e.detail.checked) {
      if (navigator.serviceWorker) {
        navigator.serviceWorker.getRegistration().then(async registration => {
          swReg = registration
          if (!swReg) return console.log('No hay registro de SW', swReg)
          let k = await getPublicKey()
          const key = convertVapidKey(k)
          swReg.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: key
            })
            .then((res: any) => res.toJSON())
            .then(async (suscripcion: any) => {
              try {
                let respuesta = await addSubscription(suscripcion)
                console.log(respuesta)
              } catch (error) {}
            })
        })
      }
      if (isAvailable) {
        PushNotifications.checkPermissions().then(res => {
          if (res.receive !== 'granted') {
            PushNotifications.requestPermissions().then(res => {
              if (res.receive === 'denied') {
                showToast('Permiso de notificación push denegado')
              } else {
                showToast('Permiso de notificación push concedido')
                register()
              }
            })
          } else {
            register()
          }
        })
      }
    } else {
      console.log('unsubcribe')
    }
  }

  return (
    <IonPage>
      <Header title="Suscripción" />
      <IonContent>
        <Row justify="center">
          <Col md={12} xs={20}>
            <CustomCard>
              <h4>Activacion de notificaciones</h4>
              <IonItem>
                <IonLabel>Recibir Notificaciones</IonLabel>
                <IonToggle
                  checked={checked}
                  onIonChange={e => handleSubcription(e)}
                />
              </IonItem>
            </CustomCard>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={20}>
            <p>
              {notifytoken}
            </p>
          </Col>
        </Row>
        {/*    <Row>
          {" "}
          <Col md={12} xs={20}>
            {notifications.length !== 0 && (
              <IonList>
                {notifications.map((notif: any) => (
                  <IonItem key={notif.id}>
                    <IonLabel>
                      <IonText>
                        <h3 className="notif-title">{notif.title}</h3>
                      </IonText>
                      <p>{notif.body}</p>
                      {notif.type === "foreground" && (
                        <p>This data was received in foreground</p>
                      )}
                      {notif.type === "action" && (
                        <p>This data was received on tap</p>
                      )}
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            )}
          </Col>
        </Row> */}
      </IonContent>
    </IonPage>
  )
}

export default Login
