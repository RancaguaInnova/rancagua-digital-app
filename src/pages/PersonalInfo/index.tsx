import React, { useEffect, useState } from 'react'
import { IonContent, IonPage, useIonRouter } from '@ionic/react'
import Header from 'components/Header'
import { Col, Row } from 'antd'
import { PersonalInfoBox } from 'containers/PersonalInfoBox'

interface PersonalInfoProps {}

const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  return (
    <IonPage>
      <Header title="Iniciar sesión de Rancagua Digital" />
      <IonContent>
        <Row justify="center">
          <Col md={12} xs={20}>
            información personal
            {/* <PersonalInfoBox /> */}
          </Col>
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default PersonalInfo
