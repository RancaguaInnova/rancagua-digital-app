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
import { getPublicKey, addSubcription } from "providers/api/notification";
import convertVapidKey from "convert-vapid-public-key";
import { ToggleChangeEventDetail } from "@ionic/core";

interface LoginProps { }

const Login: React.FC<LoginProps> = () => {
  let swReg: ServiceWorkerRegistration | undefined;

  const [checked, setChecked] = useState(false);

  const handleSubcription = async (e: CustomEvent<ToggleChangeEventDetail>) => {
    setChecked(e.detail.checked);
    console.log("e.detail.checked", e.detail.checked);
    if (e.detail.checked) {
      console.log("subcribe");

      if (navigator.serviceWorker) {
        navigator.serviceWorker.getRegistration().then(async (registration) => {
          swReg = registration;
          if (!swReg) return console.log("No hay registro de SW", swReg);
          let k = await getPublicKey();
          const key = convertVapidKey(k);
          console.log("key", key);
          swReg.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: key,
            })
            .then((res: any) => res.toJSON())

            .then(async (suscripcion: any) => {
              try {
                let respuesta = await addSubcription(suscripcion);
                console.log(respuesta);
              } catch (error) { }
            });
        });
      }
    } else {
      //unsubcribe
      console.log("unsubcribe");
    }
  };

  useEffect(() => { }, []);

  return (
    <IonPage>
      <Header title="Subcrición"></Header>
      <IonContent>
        <Row justify="center">
          <Col md={12} xs={20}>
            <CustomCard>
              <h4>Activacion de notificaciones</h4>
              <IonItem>
                <IonLabel>Recibir Notificaciones</IonLabel>
                <IonToggle
                  checked={checked}
                  onIonChange={(e) => handleSubcription(e)}
                />
              </IonItem>
            </CustomCard>
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  );
};

export default Login;
