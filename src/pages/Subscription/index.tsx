import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonToggle,
} from "@ionic/react";
import Header from "components/Header";
import { Col, Row } from "antd";
import { CustomCard } from "./styles";
import {
  getPublicKey,
  addSubscription,
  addSubscriptionApp,
} from "providers/api/notification";
import convertVapidKey from "convert-vapid-public-key";
import { ToggleChangeEventDetail } from "@ionic/core";
import { Capacitor } from "@capacitor/core";

import {
  PushNotifications,
  Token,
} from "@capacitor/push-notifications";
import { Toast } from "@capacitor/toast";
import { AppStorage } from "providers/storage";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  let swReg: ServiceWorkerRegistration | undefined;
  const isAvailable = Capacitor.isPluginAvailable("PushNotifications");
  const [checked, setChecked] = useState(false);
  const [notifyToken, setNotify] = useState("");

  useEffect(() => {
    // TODO: USE useStorage Hook
    /* async function setv() {
      let check: string = await AppStorage.getItem('check')
      setChecked(check === 'true')
    }
    setv() */
  }, []);

  const register = () => {
    PushNotifications.register();
    PushNotifications.addListener("registration", async (token: Token) => {
      try {
        await addSubscriptionApp(token.value);
      } catch (error) {
        showToast("error" + error);
      }
      showToast("Push registro exitoso");
    });
  };

  const showToast = async (msg: string) => {
    await Toast.show({
      text: msg,
    });
  };

  const handleSubscription = async (
    e: CustomEvent<ToggleChangeEventDetail>
  ) => {
    setChecked(e.detail.checked);
    AppStorage.setItem("check", e.detail.checked.toString());
    if (e.detail.checked) {
      if (navigator.serviceWorker) {
        navigator.serviceWorker.getRegistration().then(async (registration) => {
          swReg = registration;
          if (!swReg) return console.log("No hay registro de SW", swReg);
          let k = await getPublicKey();
          const key = convertVapidKey(k);
          swReg.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: key,
            })
            .then((res: any) => res.toJSON())
            .then(async (suscripcion: any) => {
              try {
                let respuesta = await addSubscription(suscripcion);
                console.log(respuesta);
              } catch (error) {}
            });
        });
      }
      if (isAvailable) {
        PushNotifications.checkPermissions().then((res) => {
          if (res.receive !== "granted") {
            PushNotifications.requestPermissions().then((res) => {
              if (res.receive === "denied") {
                showToast("Permiso de notificación push denegado");
              } else {
                showToast("Permiso de notificación push concedido");
                register();
              }
            });
          } else {
            register();
          }
        });
      }
    } else {
      console.log("unSuscribe");
    }
  };

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
                  onIonChange={(e) => handleSubscription(e)}
                />
              </IonItem>
            </CustomCard>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={20}>
            <p>{notifyToken}</p>
          </Col>
        </Row>
      
      </IonContent>
    </IonPage>
  );
};

export default Login;
