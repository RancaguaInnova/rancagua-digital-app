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

const InformationPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Información"></Header>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Información</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Información" />
      </IonContent>
    </IonPage>
  )
}

export default InformationPage
