import { IonContent, IonPage } from '@ionic/react'
import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from 'components/Header'
import ServiceItem from 'components/ServiceItem'
import { Application } from 'core/interfaces/applications'
import { GetListApplications } from 'providers/redux/actions/application'

import './styles.scss'

const ServicesPage: React.FC = () => {
  const dispatch = useDispatch()

  const { applications } = useSelector((state: any) => state.application)
  const listado: Application[] = applications
    ? applications
    : dispatch(GetListApplications())

  useEffect(() => {
    dispatch(GetListApplications())
    console.log('me vuelvo a ejecutar')
    return () => {}
  }, [dispatch])
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        <Row justify='center'>
          <h3 className='subtitle'>Servicios Online</h3>
        </Row>
        <Row>
          {listado &&
            listado.length > 0 &&
            listado.map((application, index) => {
              return (
                <Col xs={24} sm={24} md={12} lg={8} span={8} key={index}>
                  <ServiceItem application={application} />
                </Col>
              )
            })}
        </Row>
      </IonContent>
    </IonPage>
  )
}
export default ServicesPage
