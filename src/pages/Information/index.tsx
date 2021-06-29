import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import ExploreContainer from "../../components/ExploreContainer"
import Header from "../../components/Header"
import Information from "../../components/Information"
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
        <Information></Information>
      </IonContent>
    </IonPage>
  )
}

export default InformationPage
