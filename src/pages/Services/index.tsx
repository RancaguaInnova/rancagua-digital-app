import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { Col, Row } from "antd"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MotionLayoutProvider } from "react-motion-layout"
import Header from "../../components/Header"
import ServiceItem from "../../components/ServiceItem"
import { Application } from "../../interfaces/applications"
import TitleStyled from "../../components/Title"
import { GetListApplications } from "../../providers/actions/application"

import "./styles.scss"

const ServicesPage: React.FC = () => {
  const dispatch = useDispatch()

  const { applications } = useSelector((state: any) => state.application)
  const listado: Application[] = applications || []

  useEffect(() => {
    dispatch(GetListApplications())
    return () => {}
  }, [dispatch])
  return (
    <IonPage>
      <Header title="Servicios Disponibles"></Header>

      <IonContent fullscreen>
        <MotionLayoutProvider>
          <Row gutter={8}>
            {listado.map((application, index) => {
              return (
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  span={8}
                  key={index}
                  data-aos="zoom-out-down"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out-cubic"
                >
                  <ServiceItem application={application}></ServiceItem>
                </Col>
              )
            })}
          </Row>
        </MotionLayoutProvider>
      </IonContent>
    </IonPage>
  )
}

export default ServicesPage
