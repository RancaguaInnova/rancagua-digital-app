import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import ExploreContainer from "../../components/ExploreContainer"
import Header from "../../components/Header"
import "./styles.scss"

const CalendarPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Calendario"></Header>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calendario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Calendario" />
      </IonContent>
    </IonPage>
  )
}

export default CalendarPage
