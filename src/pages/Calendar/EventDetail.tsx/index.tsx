import { IonContent, IonPage } from "@ionic/react";
import { Col, Row } from "antd";
import Header from "components/Header";
import _get from "lodash/get";
import EventDetail from "components/EventDetail";

const EventDetailPage: React.FC = () => {

  return (
    <IonPage>
      <Header title="" back/>

      <IonContent fullscreen>
        <Row justify="center">
          <Col xs={24} sm={22} md={18} lg={12}>
           <EventDetail></EventDetail>
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  );
};

export default EventDetailPage;
