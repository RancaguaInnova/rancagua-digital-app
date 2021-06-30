import { Card, Typography } from "antd"
import { Moment } from "moment"
import React, { FC } from "react"
import { Event } from "../../interfaces/event"
import EventCard from "../EventCard"

interface EventListProps {
  date: Moment
}

const eventList: Event[] = [
  {
    showInCalendar: true,
    validators: [],
    _id: "5fW4kJq2eip6LcY2X",
    name: "Presentación Final Talleres de Jazz",
    date: "2019-01-26T03:00:00.000Z",
    time: "19:00",
    description:
      "Los talleres de jazz impartidos por destacados músicos e instrumentistas chilenos, Marcelo Córdova y Bruno Ramírez Realizaran una presentación Final de acceso liberada para todos los amantes del jazz.",
    externalUrl:
      "http://teatrorancagua.cl/26-enero-presentacion-final-talleres-de-jazz/",
    address: {
      streetName: "Millán",
      streetNumber: 342,
      city: "Rancagua",
    },
    tags: [
      {
        tag: "jazz",
      },
      {
        tag: "teatrorancagua",
      },
      {
        tag: "rancaguacultura",
      },
    ],
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "p2B49jwsGmetBsJry",
    name: 'Ciclo de Cine Infantil Verano. "Ole".',
    date: "2019-01-25T03:00:00.000Z",
    time: "19:30",
    description: "Centro Cultural Baquedano. Ciclo de Cine Infantil Verano.",
    address: {
      streetName: "Centro Cultural Baquedano. Avenida Baquedano.",
      streetNumber: 445,
      departmentNumber: "",
      city: "Rancagua.",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "HeRrkC8NyF24ac7HD",
    name: "Exposición Pinacoteca",
    date: "2019-01-05T03:00:00.000Z",
    time: "19:00",
    description:
      "Casa de la Cultura. Exposición de Obras Artísticas Pinacoteca. Muestra del día 5 al 31 de enero de 2019, abierto de lunes a viernes de 10:00 a 18:00 horas. Inauguración día 5 de enero, 19:00 horas.",
    address: {
      streetName: "Casa de la Cultura, Cachapoal",
      streetNumber: "90",
      city: "Rancagua",
      administrativeAreaLevel1: null,
      administrativeAreaLevel2: null,
      country: null,
      latitude: -34.1703131,
      longitude: -70.74064759999999,
    },
    externalUrl: null,
    optionLabel: "Exposición Pinacoteca",
    tags: [{}],
    detail: "<p></p>",
    endTime: "Invalid date",
    firebaseIdEvent: null,
    locations: [],
    sendFirebase: false,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "L3WfswnhKuaHSrDNe",
    name: "Brian, el nombre de mi país en llamas",
    date: "2019-01-18T03:00:00.000Z",
    time: "20:00",
    description:
      "Brian no es muy diferente de otros muchos jóvenes. Cada día nacen en algún hospital público de Santiago unos 327 niños que serán parecidos a él, creciendo en los márgenes, abusados por sus padres, que transitarán una efímera adolescencia bailando temas de disco o de Shakira, o de quién sabe quién, capaces de ternura, irresponsable, solos, abandonados, condenando a la soledad a sus amantes.",
    externalUrl:
      "http://teatrorancagua.cl/18-enero-brian-el-nombre-de-mi-pais-en-llamas/",
    address: {
      streetName: "Millán",
      streetNumber: 342,
      city: "Rancagua",
    },
    tags: [
      {
        tag: "teatro",
      },
      {
        tag: "cultura",
      },
      {
        tag: "rancaguacultura",
      },
      {
        tag: "teatrorancagua",
      },
    ],
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "W6EnMBK4FNyiuTCsH",
    name: "Teatro Marionetas Juan Carlos Olmos",
    date: "2019-01-12T03:00:00.000Z",
    time: "17:00",
    description:
      "Cancha Los Húsares. Barrio Baquedano. Encuentro Teatral Emergente. Iniciativa Extensión Centro Cultural Baquedano",
    address: {
      streetName: "Cancha Los Húsares. Barrio Baquedano.",
      streetNumber: 0,
      city: "Rancagua",
    },
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "i4tkY96WoY3kNSMKw",
    name: "Lanzamiento Libro Buen Entendedor",
    date: "2019-01-18T03:00:00.000Z",
    time: "19:00",
    description:
      "Casa de la Cultura. Proyecto cultural de rescate de refranes de la tradición oral y sabiduría popular. Macarena Monrós",
    address: {
      streetName: "Casa de la Cultura, Cachapoal",
      streetNumber: 90,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "JPGowrYseo4sEfqW4",
    name: 'Ciclo de Cine Infantil Verano. "Hotel Transilvania 3".',
    date: "2019-01-18T03:00:00.000Z",
    time: "19:30",
    description: "Centro Cultural Baquedano. Ciclo de Cine Infantil Verano.",
    address: {
      streetName: "Centro Cultural Baquedano. Avenida Baquedano.",
      streetNumber: 445,
      departmentNumber: null,
      city: "Rancagua.",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "3MgYaNoF8YbfeGeDX",
    name: "Tercer Corte de Carne, La Colectiva Teatro.",
    date: "2019-01-07T03:00:00.000Z",
    time: "19:30",
    description: "Centro Cultural Baquedano. Encuentro Teatral Emergente",
    address: {
      streetName: "Baquedano",
      streetNumber: "445",
      city: "Rancagua",
      administrativeAreaLevel1: null,
      administrativeAreaLevel2: null,
      country: null,
      latitude: -34.1703131,
      longitude: -70.74064759999999,
    },
    externalUrl: null,
    optionLabel: "Tercer Corte de Carne, La Colectiva Teatro.",
    tags: [{}],
    detail: "<p></p>",
    endTime: "Invalid date",
    firebaseIdEvent: null,
    locations: [],
    sendFirebase: true,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "6zWTHG7kdDTiutiCd",
    name: 'Cine Italiano "L\'Oriana"',
    date: "2019-01-31T03:00:00.000Z",
    time: "21:00",
    description:
      "La película cuenta la historia de la periodista y escritora italiana Oriana Fallaci, tanto en su exitosa faceta profesional como en la personal",
    externalUrl:
      "http://www.rancaguacultura.cl/2019/01/04/ciclo-de-cine-italiano/",
    address: {
      streetName: "Casa de la Cultura, Av. Cachapoal",
      streetNumber: 90,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    tags: [
      {
        tag: "cineitaliano",
      },
      {
        tag: "rancaguacultura",
      },
      {
        tag: "CasadelaCultura",
      },
    ],
    optionLabel: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "tc732R9emBeuzsSpB",
    name: "Circo Imaginario del Payaso Oberol, Compañía La Gallá.",
    date: "2019-01-06T03:00:00.000Z",
    time: "18:30",
    description:
      "Plaza Los Héroes. Encuentro Teatral Emergente. Iniciativa Extensión Centro Cultural Baquedano",
    address: {
      streetName: "Plaza Los Héroes",
      streetNumber: 0,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "vABpehoKXce4rY9gY",
    name: "La Bailarina, FITAM 2019",
    date: "2019-01-25T03:00:00.000Z",
    time: "21:00",
    description:
      "La Danseuse, dicen sus creadores, es un “grito mecánico por la femineidad”, una celebración del empoderamiento femenino y una fiesta para dar inicio a esta nueva “era de la mujer”.",
    externalUrl:
      "http://teatrorancagua.cl/22-diciembre-fiebre-de-udar-por-la-noche-2/",
    address: {
      streetName: "Alameda",
      streetNumber: 269,
      city: "Rancagua",
    },
    tags: [
      {
        tag: "LaBailarina",
      },
      {
        tag: "FITAM2019",
      },
      {
        tag: "rancaguacultura",
      },
    ],
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "wLRdbaBPY5njTL5Bh",
    name: "Ciclo de Cine Infantil Verano. Pie Pequeño SmallFoot.",
    date: "2019-01-23T03:00:00.000Z",
    time: "19:30",
    description: "Centro Cultural Baquedano. Ciclo de Cine Infantil Verano.",
    address: {
      streetName: "Centro Cultural Baquedano. Avenida Baquedano",
      streetNumber: 445,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "HbRqeeW6RsK8iezQo",
    name: 'Lanzamiento Libro "La Luna y Dos"',
    date: "2019-01-25T03:00:00.000Z",
    time: "19:00",
    description:
      'Casa de la Cultura. Lanzamiento Libro "La Luna y Dos". Escritor Raúl Jara.',
    address: {
      streetName: "Casa de la Cultura, Cachapoal",
      streetNumber: 90,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "RwJnhhoy2EmL6yZK6",
    name: 'Cine Italiano "La Sedia della Felicità"',
    date: "2019-02-01T03:00:00.000Z",
    time: "21:00",
    description:
      "Bruna es una estilista que lucha por llegar a fin de mes. Traicionada por su novio y acosada por un proveedor sin escrúpulos, recibe una confesión en el lecho de muerte de una cliente, a la que arregla las uñas en la cárcel. Madre de un famoso ladrón",
    externalUrl:
      "http://www.rancaguacultura.cl/2019/01/04/ciclo-de-cine-italiano/",
    address: {
      streetName: "Centro Cultural Baquedano, Av. Baquedano",
      streetNumber: 445,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    tags: [
      {
        tag: "cineitaliano",
      },
      {
        tag: "rancaguacultura",
      },
      {
        tag: "CCB",
      },
    ],
    optionLabel: null,
  },
  {
    showInCalendar: false,
    validators: [],
    _id: "kk9Y7givK7Gb44Dos",
    name: "PRIMERA FASE Jornada 1 Sudamericano SUB20",
    date: "2019-01-17T03:00:00.000Z",
    time: "17:10",
    description: "Colombia vs Venezuela // Chile vs Bolivia",
    address: {
      streetName: "Estadio El Teniente",
      streetNumber: 0,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "CudGqZPd3MPYtfwjT",
    name: "Documental El Creyente",
    date: "2019-01-24T03:00:00.000Z",
    time: "18:00",
    description:
      "Espacio Cultural Iglesia La Merced. Cinta que narrará los inicios y la trayectoria de la Segunda Compañía de Bomberos de Doñihue, Bomba Lo Miranda, en la región de O’Higgins.",
    address: {
      streetName: "Espacio Cultural Iglesia La Merced, Cuevas",
      streetNumber: 399,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: false,
    validators: [],
    _id: "TPXd3BaCjQTXwa7dj",
    name: "PRIMERA FASE Jornada 4 Sudamericano SUB20",
    date: "2019-01-23T03:00:00.000Z",
    time: "17:10",
    description: "Bolivia vs Venezuela // Chile vs Brasil",
    address: {
      streetName: "Estadio El Teniente",
      streetNumber: 0,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "sZR63M4wBCBRwyvQQ",
    name: "La Niña Astronauta, Compañía LAFAMILIATEATRO",
    date: "2019-01-12T03:00:00.000Z",
    time: "20:00",
    description: "Centro Cultural Baquedano. Encuentro Teatral Emergente",
    address: {
      streetName: "Baquedano",
      streetNumber: 445,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "wo3KiJoP2qyDtJcmg",
    name: "Charla de Arte Colonial Pre y Post Independencia",
    date: "2019-01-13T03:00:00.000Z",
    time: "17:00",
    description:
      "Espacio Cultural Iglesia La Merced. Charla de Arte Colonial Pre y Post Independencia",
    address: {
      streetName: "Espacio Cultural Iglesia La Merced, Cuevas",
      streetNumber: 399,
      departmentNumber: null,
      city: "Rancagua",
      postalCode: null,
    },
    externalUrl: null,
    optionLabel: null,
    tags: null,
  },
  {
    showInCalendar: true,
    validators: [],
    _id: "MgjZLJtCSiHyevtcm",
    name: "Lanzamiento Disco Cantor Francisco Astorga",
    date: "2019-01-09T03:00:00.000Z",
    time: "18:30 horas",
    description:
      'Espacio Cultural Iglesia La Merced. Lanzamiento de CD del Cantor Francisco Astorga "Cantata a la Diócesis de Rancagua"',
    address: {
      streetName: "Cuevas",
      streetNumber: 399,
      city: "Rancagua",
    },
  },
]

const EventList: FC<EventListProps> = ({ date }) => {
  console.log("soy la fecha seleccionada", date.format("DD-MM-YYYY"))
  return (
    <div>
      Mostrando los eventos del día :{date.format("DD-MM-YYYY")}
      {eventList.map((item, index) => {
        return <EventCard key={index} event={item}></EventCard>
      })}
    </div>
  )
}

export default EventList
