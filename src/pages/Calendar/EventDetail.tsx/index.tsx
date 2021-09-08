import { IonContent, IonPage } from "@ionic/react";
import { Col, Row } from "antd";
import Header from "components/Header";
import { useLocation } from "react-router";
import _get from "lodash/get";
import { useEffect, useState } from "react";
import { setInStorage, getFromStorage } from "hooks/useStorage";

const EventDetailPage: React.FC = () => {
  const location = useLocation();
  const [id, setId] = useState("");
  useEffect(() => {
    const getId = async () => {
      let idEvent = _get(location, "id", "");
      if (idEvent !== "") {
        setInStorage("idEvent", idEvent);
      } else {
        idEvent = await getFromStorage("idEvent", "");
      }
      setId(idEvent);
    };
    getId();
  }, []);

  return (
    <IonPage>
      <Header title="Detalle" />

      <IonContent fullscreen>
        <Row justify="center">
          <Col xs={24} sm={22} md={18} lg={12}>
            <div>soy el detalle con id:{id}</div>
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  );
};

export default EventDetailPage;
