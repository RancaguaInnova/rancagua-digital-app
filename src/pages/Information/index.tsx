import { IonContent, IonPage } from "@ionic/react"
import Header from "components/Header"
import Information from "components/Information"
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
