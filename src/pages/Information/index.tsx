import { IonContent, IonPage } from '@ionic/react'
import { Row } from 'antd'
import Header from 'components/Header'
import Information from 'components/Information'
import './styles.scss'

const InformationPage: React.FC = () => {
  return (
    <IonPage>
      <Header title='Información'></Header>
      <IonContent fullscreen>
        <Row justify='center'>
          <h3 className='subtitle'>Informaciones</h3>
        </Row>
        <Information></Information>
      </IonContent>
    </IonPage>
  )
}

export default InformationPage
