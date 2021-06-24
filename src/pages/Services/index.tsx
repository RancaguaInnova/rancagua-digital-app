import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { Col, Row } from "antd"
import React, { useEffect } from "react"
import { MotionLayoutProvider } from "react-motion-layout"
import Header from "../../components/Header"
import ServiceItem from "../../components/ServiceItem"
import { Application } from "../../interfaces/applications.interface"
import TitleStyled from "../../components/Title"

import "./styles.scss"

const ServicesPage: React.FC = () => {
  const applications: Application[] = [
    {
      developerInfo: {
        address: {
          streetName: "Lanco",
          streetNumber: 1265,
          departmentNumber: null,
          city: "Rancagua",
          postalCode: null,
        },
        phone: { areaCode: null, number: null, mobilePhone: "982001584" },
        firstName: "Jose",
        lastName: "Abarca",
        email: "jose.abarca.saavedra@gmail.com",
        url: "https://transitodigital.cl",
      },
      userFields: [
        "identifier",
        "firstName",
        "lastName",
        "address",
        "phone",
        "educationalLevel",
        "emails",
      ],
      name: "Tránsito Digital",
      description: "Reserva de horas para trámite de Licencia de Conducir",
      approved: true,
      applicationURL: "https://rancagua.licenciaconducir.cl/acceso",
      appToken: "5c1020e5a060df32145dcdd0",
      isPrivate: true,
    },
    {
      developerInfo: {
        address: {
          streetName: "Av. Nueva Providencia",
          streetNumber: 1881,
          departmentNumber: "1515",
          city: "Santiago",
          postalCode: "7500000",
        },
        phone: { areaCode: 2, number: "2234435", mobilePhone: "993076125" },
        firstName: "Daniel",
        lastName: "Vera",
        email: "contacto@produzca.com",
        url: "http://didecoenlinea.cl",
      },
      userFields: [
        "firstName",
        "lastName",
        "identifier",
        "address",
        "phone",
        "gender",
        "birthdate",
        "emails",
      ],
      name: "Dideco En Línea",
      description:
        "Plataforma de Gestión y Comunicaciones para Direcciones de Desarrollo Comunitario",
      approved: false,
      applicationURL: "https://didecoenlinea.cl/rancagua/searchForm",
      appToken: "5c1a48140565d80bb83dc591",
      isPrivate: true,
    },
    {
      developerInfo: {
        address: {
          streetName: "Kennedy",
          streetNumber: 1650,
          departmentNumber: "22",
          city: "Rancagua",
          postalCode: "2820000",
        },
        phone: {
          areaCode: 72,
          number: "2255106",
          mobilePhone: "+56932558308",
        },
        firstName: "Juan",
        lastName: "Espoz",
        email: "juan.espoz@espozconsulting.com",
        url: "www.espozconsulting.com",
      },
      userFields: ["identifier", "firstName", "lastName", "phone"],
      name: "Reserva de horas médicas",
      description:
        "Mi agenda salud, solicita tus horas de atención médica de forma fácil y rápida, con la flexibilidad de días y horas.",
      approved: true,
      applicationURL: "https://rancagua-dev.firebaseapp.com/",
      appToken: "5c0ff6bfa060df32145dcdc8",
      isPrivate: false,
    },
    {
      developerInfo: {
        address: {
          streetName: "Avenida República de Chile",
          streetNumber: 36,
          city: "Rancagua",
          formatted_address:
            "Av República de Chile 36, Rancagua, Región del Libertador Gral. Bernardo O’Higgins, Chile",
          place_id: "ChIJ-xh-IQxDY5YRWPvf3UjGsB0",
          latitude: -34.1554604,
          longitude: -70.7468859,
        },
        phone: { areaCode: 72, number: "2250760" },
        email: "deportes@rancagua.cl",
      },
      userFields: ["identifier"],
      name: "Deportes",
      description: "Noticias, Campeonatos, Talleres, Reserva de canchas y mas!",
      approved: true,
      isPrivate: false,
      applicationURL: "https://deportesrancagua.cl",
      appToken: "5cc0c1308181e8102358ed50",
      ownerId: "wvACyz3QKadTeLjbs",
    },
    {
      developerInfo: {
        address: {
          administrativeAreaLevel1: "Región Metropolitana",
          administrativeAreaLevel2: "Santiago",
          country: "Chile",
          formatted_address: "Santiago, Región Metropolitana, Chile",
          place_id: "ChIJL68lBEHFYpYRMQkPQDzVdYQ",
          latitude: -33.4488897,
          longitude: -70.6692655,
        },
        phone: { areaCode: null, number: null },
        firstName: "Avis",
        lastName: "Tecmedica",
      },
      userFields: ["firstName", "lastName"],
      name: "MIHC",
      description:
        "MiHC Mi Historia Clínica es un historial médico en línea, en el cual te permitirá ver  horas pendientes, revisar fechas de entrega de medicamentos, alimentos y ver tus exámenes.",
      approved: true,
      isPrivate: false,
      appMovil: false,
      urlApp: "mihc://",
      appName: "MIHC",
      appStoreId: 1271403659,
      appStoreLocale: "cl",
      playStoreId: "com.ionicframework.myhcmovil267012",
      appToken: "5d5b13b5438e4d1e25ade387",
      applicationURL: "https://webviews.smartrancagua.com/landing/mihc",
    },
    {
      developerInfo: {
        address: {
          streetName: "alcazar",
          streetNumber: 530,
          city: "rancagua",
        },
        phone: { mobilePhone: "982001584" },
        firstName: "Jose",
        lastName: "Abarca",
        email: "jose@smart.rancagua.cl",
        url: "smartrancagua.com",
      },
      userFields: ["emails", "identifier"],
      _id: "5d5c2ca01c9d4400007f0014",
      name: "Estacionamientos públicos",
      description:
        "Mapa con estacionamientos públicos disponibles en la ciudad",
      approved: true,
      applicationURL: "https://webviews.smartrancagua.com/integration/parking",
      appToken: "5c49c6de94b22d262a13c0d2",
      isPrivate: false,
    },
    {
      developerInfo: {
        address: {
          streetName: "alcazar",
          streetNumber: 530,
          city: "rancagua",
        },
        phone: { mobilePhone: "982001584" },
        firstName: "Jose",
        lastName: "Abarca",
        email: "jose@smart.rancagua.cl",
        url: "smartrancagua.com",
      },
      userFields: ["emails", "identifier"],
      _id: "5d72b7c21c9d4400004f845a",
      name: "ADMIN Estacionamientos disponibles",
      description: "Mapa con estacionamientos disponibles en la ciudad",
      approved: true,
      applicationURL:
        "https://webviews.smartrancagua.com/integration/parking/admin",
      appToken: "5c49c6de94b22d262a13c0d2",
      isPrivate: true,
    },
    {
      developerInfo: {
        phone: { mobilePhone: "951211323" },
        firstName: "Leonardo",
        lastName: "Luarte",
        email: "leonardo@familink.us",
        url: "http://libretaeducativa.com",
      },
      userFields: [],
      _id: "5d8d09cfd07c3d0f7072988c",
      name: "Libreta Educativa",
      description: "Mantente en contacto con el colegio de tus hijos",
      approved: true,
      isPrivate: true,
      applicationURL: "https://mi.libretaeducativa.com/api/rcga/magic_links?",
    },
    {
      developerInfo: {
        address: {
          postalCode: "1",
          latitude: -34.1703131,
          longitude: -70.74064759999999,
        },
        phone: { areaCode: 1, number: "1", mobilePhone: "2" },
      },
      userFields: ["firstName"],
      name: "Mapa de Contingencia",
      description:
        "Estado de bencineras, farmacias, terminales de buses y supermercados",
      approved: true,
      isPrivate: false,
      applicationURL:
        "https://www.google.com/maps/d/u/0/embed?mid=1ESOtdzlMkDyO-6B6JTQUw3t__PmnUgrZ&z=14&ll=-34.1634639999931%2C-70.73531887955562",
      appMovil: false,
      urlApp: "1",
      appName: "1",
      appStoreId: 1,
      appStoreLocale: "1",
      playStoreId: "1",
      appToken: "5db08862d6e26646a8ef5d0b",
    },
    {
      developerInfo: {
        address: { latitude: -34.1703131, longitude: -70.74064759999999 },
        phone: { areaCode: null, number: null, mobilePhone: "1" },
      },
      userFields: ["email"],
      name: "Mapa de ferias libres",
      description:
        "Información de ubicación, día y horario de funcionamiento de ferias libres.",
      approved: true,
      isPrivate: false,
      applicationURL:
        "https://www.google.com/maps/d/embed?mid=1n_8QCgTPz70c444A0Qcy-s1zH0Pzk3US&z=14",
      appMovil: false,
      urlApp: "1",
      appName: "1",
      appStoreId: 1,
      appStoreLocale: "1",
      playStoreId: "1",
      appToken: "5db1f2ead6e26646a8ef5d1e",
    },
    {
      developerInfo: {
        address: {
          streetName: "alcazar",
          streetNumber: 530,
          city: "rancagua",
        },
        phone: { mobilePhone: "982001584" },
        firstName: "Jose",
        lastName: "Abarca",
        email: "jose@smart.rancagua.cl",
        url: "smartrancagua.com",
      },
      userFields: ["emails", "identifier"],
      _id: "5deab83c1c9d440000594ed1",
      name: "Recolección de basura",
      description:
        "Mapa en tiempo real con la ubicación de los camiones de basura domiciliaria",
      approved: true,
      applicationURL:
        "https://webviews.smartrancagua.com/integration/garbage-collector",
      appToken: "5c49c6de94b22d262a13c0d2",
      isPrivate: false,
    },
    {
      developerInfo: {
        address: {
          streetName: "Pedro Mira",
          streetNumber: 443,
          city: "Santiago",
        },
        phone: { mobilePhone: "" },
        firstName: "Alexis",
        lastName: "Paredes",
        email: "alexis@sinec.cl",
        url: "sicec.cñ",
      },
      userFields: ["emails"],
      _id: "5e0f74f21c9d4400000a751e",
      name: "Mantención Luminarias",
      description: "Reporta desperfectos en luminaria de la comuna",
      approved: true,
      applicationURL: "https://sinecrancagua.cl",
      isPrivate: false,
    },
    {
      developerInfo: {
        address: {
          streetName: "alcazar",
          streetNumber: 530,
          city: "rancagua",
        },
        phone: { mobilePhone: "982001584" },
        firstName: "Jose",
        lastName: "Abarca",
        email: "jose@smart.rancagua.cl",
        url: "smartrancagua.com",
      },
      userFields: ["emails", "identifier"],
      _id: "5e6ba43b1c9d4400004eee0c",
      name: "Tarjeta Vecino",
      description: "Accede a descuentos y beneficios en nuestra comuna",
      approved: true,
      applicationURL: "https://webviews.smartrancagua.com/tarjetavecino",
      appToken: "5c49c6de94b22d262a13c0d2",
      isPrivate: false,
    },
    {
      developerInfo: {
        address: {
          streetName: "alcazar",
          streetNumber: 530,
          city: "rancagua",
        },
        phone: { mobilePhone: "982001584" },
        firstName: "Jose",
        lastName: "Abarca",
        email: "jose@smart.rancagua.cl",
        url: "smartrancagua.com",
      },
      userFields: ["emails", "identifier"],
      _id: "5ed198189dc4810d32fba2e1",
      name: "Credencial Municipal",
      description: "Identificación de funcionarios municipales",
      approved: true,
      applicationURL:
        "https://rancagua-digital-webviews-6xisxcu5o.now.sh/officialCredential",
      appToken: "5c49c6de94b22d262a13c0d2",
      isPrivate: true,
    },
    {
      developerInfo: {
        address: { latitude: -34.1703131, longitude: -70.74064759999999 },
        phone: { areaCode: null, number: null, mobilePhone: "1" },
      },
      userFields: ["email"],
      _id: "5f57b300c26af0607f6b2919",
      name: "Reservas de Hora",
      description: "",
      approved: true,
      isPrivate: false,
      applicationURL:
        "https://rancagua-digital-webviews-git-master.rancagua-digital.now.sh/reservaonline",
      appMovil: false,
      urlApp: "1",
      appName: "1",
      appStoreId: 1,
      appStoreLocale: "1",
      playStoreId: "1",
      appToken: "5db1f2ead6e26646a8ef5d1e",
    },
    {
      developerInfo: {
        address: { latitude: -34.1703131, longitude: -70.74064759999999 },
        phone: { areaCode: null, number: null },
      },
      userFields: [],
      name: "Sosafe",
      description: "Red Social Ciudadana",
      approved: true,
      isPrivate: false,
      appMovil: true,
      urlApp: "sosafe://",
      appName: "sosafe",
      appStoreId: 854686449,
      appStoreLocale: "cl",
      playStoreId: "cl.sosafe.panicbuttonandroid.app",
      appToken: "5f6b7b4657c290469dbc3c61",
    },
    {
      developerInfo: {
        address: {
          streetName: "cormun",
          streetNumber: 36,
          city: "Rancagua",
          formatted_address:
            "Av República de Chile 36, Rancagua, Región del Libertador Gral. Bernardo O’Higgins, Chile",
          place_id: "ChIJ-xh-IQxDY5YRWPvf3UjGsB0",
          latitude: -34.1554604,
          longitude: -70.7468859,
        },
        phone: { areaCode: 72, number: "2250760" },
        email: "jose@smart.rancagua.cl",
      },
      userFields: ["identifier"],
      _id: "5f884ef17aa6b329f836efc0",
      name: "Salud",
      description: "Corporación Municipal",
      approved: true,
      isPrivate: false,
      applicationURL: "http://web.saludcormun.cl/",
      appToken: "5cc0c1308181e8102358ed50",
      ownerId: "wvACyz3QKadTeLjbs",
    },
    {
      developerInfo: {
        address: {
          streetName: "cormun",
          streetNumber: 36,
          city: "Rancagua",
          formatted_address:
            "Av República de Chile 36, Rancagua, Región del Libertador Gral. Bernardo O’Higgins, Chile",
          place_id: "ChIJ-xh-IQxDY5YRWPvf3UjGsB0",
          latitude: -34.1554604,
          longitude: -70.7468859,
        },
        phone: { areaCode: 72, number: "2250760" },
        email: "jose@smart.rancagua.cl",
      },
      userFields: ["identifier"],
      _id: "5f884fa37aa6b329f836efc1",
      name: "Cultura",
      description: "Corporación Municipal",
      approved: true,
      isPrivate: false,
      applicationURL: "https://www.rancaguacultura.cl/",
      appToken: "5cc0c1308181e8102358ed50",
      ownerId: "wvACyz3QKadTeLjbs",
    },
  ]
  useEffect(() => {
    return () => {
      // Limpiar la suscripción
      // subscription.unsubscribe()
    }
  })
  return (
    <IonPage>
      <Header title="Servicios"></Header>

      <IonContent fullscreen>
        <TitleStyled level={3}>Servicios</TitleStyled>
        <MotionLayoutProvider>
          <Row gutter={8}>
            {applications.map((application, index) => {
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
