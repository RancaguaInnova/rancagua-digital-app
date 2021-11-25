import { IonContent, IonPage } from "@ionic/react";
import { Calendar, Card, Col, Row } from "antd";
import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import locale from "antd/es/date-picker/locale/es_ES";
import { dateCellRender } from "components/Calendar";
import Header from "components/Header";
import "./styles.scss";
import EventList from "components/EventList";
import { useDispatch, useSelector } from "react-redux";
import { GetListEvents } from "providers/redux/actions/event";
import { Event } from "core/interfaces/event";

const CalendarPage: React.FC = () => {
  const [value, setValue] = useState(moment(Date.now()));
  const dispatch = useDispatch();
  const { events } = useSelector((state: any) => state.event);
  const listado: Event[] = events || [];
  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(GetListEvents(value.format("YYYY-MM-DD"))),
      60000
    );
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    dispatch(GetListEvents(value.format("YYYY-MM-DD")));
  }, [dispatch, value]);

  const onSelect = (newValue: Moment) => {
    setValue(newValue);
  };
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <Row justify="center">
          <h3 className="subtitle">Calendario de Eventos</h3>
        </Row>
        <Row justify="center">
          <Col xs={24} sm={22} md={18} lg={12}>
            <Calendar
              dateCellRender={(d) => dateCellRender(d, listado)}
              onSelect={onSelect}
              locale={locale}
            />
            <EventList listado={listado} />
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  );
};

export default CalendarPage;
