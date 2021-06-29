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
        <Information></Information>
      </IonContent>
    </IonPage>
  )
}

export default InformationPage
