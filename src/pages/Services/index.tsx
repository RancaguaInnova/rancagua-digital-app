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

const ServicesPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Servicios"></Header>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Servicios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Servicios" />
      </IonContent>
    </IonPage>
  )
}

export default ServicesPage
