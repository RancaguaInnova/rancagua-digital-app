import { IonContent, IonPage } from '@ionic/react'
import { Calendar, Card, Col, Row } from 'antd'
import moment, { Moment } from 'moment'
import { useState } from 'react'
import locale from 'antd/es/date-picker/locale/es_ES'
import { dateCellRender } from 'components/Calendar'
import Header from 'components/Header'
import './styles.scss'
import EventList from 'components/EventList'

const CalendarPage: React.FC = () => {
  const [value, setValue] = useState(moment(Date.now()))
  const onSelect = (newValue: Moment) => {
    setValue(newValue)
  }
  return (
    <IonPage>
      <Header title="Calendario de Eventos" />

      <IonContent fullscreen>
        <Row justify="center">
          <Col xs={24} sm={22} md={18} lg={12}>
            <Calendar
              dateCellRender={dateCellRender}
              // monthCellRender={monthCellRender}
              onSelect={onSelect}
              locale={locale}
            />

            <EventList date={value} />
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default CalendarPage
