import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { Calendar, Card } from "antd"
import moment, { Moment } from "moment"
import { useState } from "react"
import locale from "antd/es/date-picker/locale/es_ES"

import { dateCellRender, monthCellRender } from "../../components/Calendar"
import ExploreContainer from "../../components/ExploreContainer"
import Header from "../../components/Header"
import "./styles.scss"
import EventList from "../../components/EventList"

const CalendarPage: React.FC = () => {
  const [value, setValue] = useState(moment(Date.now()))
  const onSelect = (newValue: Moment) => {
    console.log("date selected ", value.format("DD-MM-YYYY"))
    setValue(newValue)
  }
  return (
    <IonPage>
      <Header title="Calendario"></Header>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calendario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Card>
          <Calendar
            // dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
            onSelect={onSelect}
            locale={locale}
          />
        </Card>
        <EventList date={value}></EventList>
      </IonContent>
    </IonPage>
  )
}

export default CalendarPage
