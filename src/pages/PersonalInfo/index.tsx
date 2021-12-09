import React, { } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import Header from 'components/Header'
import { Col, Row } from 'antd'
import { PersonalInfoBox } from 'containers/PersonalInfoBox'

interface PersonalInfoProps { }

const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  return (
    <IonPage>
      <Header title="Mi Perfil" />
      <IonContent>
        <Row justify="center">
          <Col md={12} xs={20}>
            <PersonalInfoBox />
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default PersonalInfo
