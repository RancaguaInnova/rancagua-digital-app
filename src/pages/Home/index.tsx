import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import ExploreContainer from "../../components/ExploreContainer"
import "./styles.scss"
import Header from "../../components/Header"

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Inicio"></Header>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Inicio" />
      </IonContent>
    </IonPage>
  )
}

export default HomePage
