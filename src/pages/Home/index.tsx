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
import { Tweet } from "../../interfaces/tweet.interface"
import { useEffect } from "react"
import NewsCard from "../../components/NewsCard"

const HomePage: React.FC = () => {
  const tweets: Tweet[] = [
    {
      text: "Ahora @alcaldesoto en @radioazucarfm #rancagua https://t.co/150vMxKcCG",
      author_id: "109297750",
      created_at: "2021-06-17T16:48:25.000Z",
      id: "1405568023973580806",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405568005074046977",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4GUp1IX0AERlvL.jpg",
          },
          {
            media_key: "3_1405568005430448132",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4GUp2dWEAQa-6a.jpg",
          },
          {
            media_key: "3_1405568005115985920",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4GUp1SXwAA0XiC.jpg",
          },
        ],
      },
    },
    {
      text: "@alcaldesoto en reunión con @MDSOhiggins Monica Toro, conversando de programas sociales en #Rancagua https://t.co/nazp0GXS3t",
      author_id: "109297750",
      created_at: "2021-06-17T15:52:50.000Z",
      id: "1405554034023542784",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405554017460228099",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4GH7pNXEAM2Cxv.jpg",
          },
          {
            media_key: "3_1405554017468653569",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4GH7pPXoAEg1uq.jpg",
          },
        ],
      },
    },
    {
      text: "¿Buscas una mascota? En el Canil Municipal de #Rancagua estamos entregando en adopción a perritos con todas sus vacunas, esterilizados, y con atención veterinaria gratuita de por vida. Adopta un perrito, adopta amor. Conócelos en: https://t.co/Q7AKEvYLQO \n@Rguasustentable https://t.co/yqbF6JB7B0",
      author_id: "109297750",
      created_at: "2021-06-17T15:51:47.000Z",
      id: "1405553770214342656",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405553723066171395",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4GHqggWQAMky0T.png",
          },
        ],
      },
    },
    {
      text: "Durante esta mañana en su despacho @alcaldesoto recibió a Juan Carlos Abud, jefe departamento seguridad pública del municipio de #Rancagua, hoy alcalde electo de #Machalí, quien después de 13 años como funcionario municipal, suspende sus funciones para asumir su cargo edilicio. https://t.co/7xSELcQzJb",
      author_id: "109297750",
      created_at: "2021-06-17T14:55:26.000Z",
      id: "1405539588739764240",
      attachments: {
        media_keys: [
          {
            media_key: "7_1405538972713979913",
            preview_image_url:
              "https://pbs.twimg.com/ext_tw_video_thumb/1405538972713979913/pu/img/xM7IKkqPdnS5ZLsu.jpg",
            type: "video",
          },
        ],
      },
    },
    {
      text: "@alcaldesoto en entrevista esta mañana en @BienvenidaFM , hablando de la Farmacia Comunal #Rancagua https://t.co/hqk8lgZXiB",
      author_id: "109297750",
      created_at: "2021-06-17T14:53:26.000Z",
      id: "1405539084668346381",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405538930280210439",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4F6NdFVoAc0hvt.jpg",
          },
          {
            media_key: "3_1405538930275995661",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4F6NdEVUA0Gkn_.jpg",
          },
          {
            media_key: "3_1405538930271789071",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4F6NdDVIA8bBiC.jpg",
          },
        ],
      },
    },
    {
      text: "🗓️Calendario y puntos de💉 vacunación contra el #COVID19 \n\n⚠️Acuda por su primera dosis solo si está dentro del calendario de vacunación #Rancagua #Salud\n\n🔴No necesita Permiso de Desplazamiento para asistir a vacunarse.\n\n@alcaldesoto @cormunrancagua https://t.co/f2P8pB33pV",
      author_id: "109297750",
      created_at: "2021-06-17T14:45:50.000Z",
      id: "1405537175077224472",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405537166273302544",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4F4mxpUUBA-55v.jpg",
          },
          {
            media_key: "3_1405537166327877649",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4F4mx2VEBEolT6.jpg",
          },
          {
            media_key: "3_1405537166264913924",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4F4mxnUUAQO07Y.jpg",
          },
          {
            media_key: "3_1405537166248202240",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4F4mxjVUAAjbob.jpg",
          },
        ],
      },
    },
    {
      text: "¡Farmacia Comunal!🙌🏻\nYa está abierta nuestra farmacia comunal. Recuerda inscribirte en nuestro correo electronico o whatsapp para comenzar a ahorrar en la compra de medicamentos.👏🏻\n✉️ farmaciacomunalrancagua@cormun.cl\n📱 +56 9 7157 8842 https://t.co/nxXKYJ8lWm",
      author_id: "109297750",
      created_at: "2021-06-16T22:40:21.000Z",
      id: "1405294201995251714",
      attachments: {
        media_keys: [
          {
            media_key: "7_1405294141265698822",
            preview_image_url:
              "https://pbs.twimg.com/ext_tw_video_thumb/1405294141265698822/pu/img/NBouSW2TT3UFD075.jpg",
            type: "video",
          },
        ],
      },
    },
    {
      text: "Continuando con las audiencias de esta tarde @alcaldesoto recibió a dirigentes del sindicato de Tarjeteras de #Rancagua quienes trajeron un presente de despedida para la máxima autoridad de la ciudad capital. https://t.co/PpyVD5CAZD",
      author_id: "109297750",
      created_at: "2021-06-16T21:01:53.000Z",
      id: "1405269420839096323",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405269406922334208",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4CFFIVUYAAyz6I.jpg",
          },
          {
            media_key: "3_1405269406922403842",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4CFFIVVcAIcUnC.jpg",
          },
          {
            media_key: "3_1405269406934978560",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4CFFIYVUAADoYq.jpg",
          },
        ],
      },
    },
    {
      text: "Infórmate sobre los nuevos casos de Covid en #rancagua y la región. Recuerda mantener las medidas de prevención como uso de mascarilla y distancia física.\n#RancaguaNoTeConfíes https://t.co/vAwsAJzFdh",
      author_id: "109297750",
      created_at: "2021-06-16T20:25:18.000Z",
      id: "1405260215705079811",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405260197833023491",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4B8tFzVIAMHFq9.jpg",
          },
        ],
      },
    },
    {
      text: "Asiste a Operativo de Búsquedas Activa o BAC que realizan a diario funcionarios de salud municipal en #Rancagua. Protege a tus seres queridos del contagio, hazte el examen. Procure llegar temprano. #RancaguaNoTeConfíes https://t.co/f72XIo29tv",
      author_id: "109297750",
      created_at: "2021-06-16T19:24:56.000Z",
      id: "1405245024196075531",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405245015182352387",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4Bu5WBVIAMVihK.jpg",
          },
        ],
      },
    },
    {
      text: "¿Buscas una mascota? En el Canil Municipal de #Rancagua estamos entregando en adopción a perritos con todas sus vacunas, esterilizados, y con atención veterinaria gratuita de por vida. Adopta un perrito, adopta amor. Conócelos en: https://t.co/Q7AKEvYLQO \n@Rguasustentable https://t.co/9g0fBbRZ7x",
      author_id: "109297750",
      created_at: "2021-06-16T19:20:56.000Z",
      id: "1405244016074137609",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405243972994306049",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4Bt8rkVkAEYYef.png",
          },
        ],
      },
    },
    {
      text: "@alcaldesoto y el municipio de #Rancagua da puesta en marcha de la nueva Farmacia Comunal de la ciudad, la cual beneficiará a todos los vecinos y vecinas con beneficios de hasta un 50% menos en sus medicamentos habituales. https://t.co/BFjxo4ebMK",
      author_id: "109297750",
      created_at: "2021-06-16T18:40:06.000Z",
      id: "1405233739387572231",
    },
    {
      text: "@alcaldesoto y el Municipio de #Rancagua dan inicio a la apertura oficial de la Farmacia Comunal, un compromiso cumplido y solicitados por todos los vecinos y vecinas en la consulta ciudadana. https://t.co/Q97Sm7OZSA",
      author_id: "109297750",
      created_at: "2021-06-16T16:36:33.000Z",
      id: "1405202648299716608",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405202638237360130",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4BIWrmUYAIK3Ga.jpg",
          },
          {
            media_key: "3_1405202638216392713",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4BIWrhUcAkQHYz.jpg",
          },
          {
            media_key: "3_1405202638224826369",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4BIWrjVIAEQr2y.jpg",
          },
          {
            media_key: "3_1405202638220644353",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4BIWriVUAE4vma.jpg",
          },
        ],
      },
    },
    {
      text: "@alcaldesoto y el Municipio de #Rancagua dan inicio a la apertura oficial de la Farmacia Comunal, un compromiso cumplido y solicitados por todos los vecinos y vecinas en la consulta ciudadana. https://t.co/gZrAyi1UMi",
      author_id: "109297750",
      created_at: "2021-06-16T16:33:19.000Z",
      id: "1405201836471205894",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405201826002051072",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4BHnZyVIAA--Yt.jpg",
          },
          {
            media_key: "3_1405201825997869062",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4BHnZxVUAYvwKy.jpg",
          },
          {
            media_key: "3_1405201826006257667",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4BHnZzVUAMgabt.jpg",
          },
        ],
      },
    },
    {
      text: "🔴Próximamente apertura del nuevo CESFAM 2, ubicado en avenida Las Torres. Otro compromiso cumplido para #Rancagua✅  @alcaldesoto https://t.co/5NPvK9OzLP",
      author_id: "109297750",
      created_at: "2021-06-16T15:00:58.000Z",
      id: "1405178592925995019",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405178582897332226",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4AyeeeVEAIfJ9b.jpg",
          },
        ],
      },
    },
    {
      text: "#Rancagua dispone de una empresa de mantenimiento de semáforos: Escamet Ltda. Para conocer teléfono de emergencia, WhatsApp, Twitter y correo donde poder hacer las denuncias o solicitudes por fallas, revisar acá: https://t.co/f3i5zY28zw",
      author_id: "109297750",
      created_at: "2021-06-16T14:45:04.000Z",
      id: "1405174593153908736",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405174581179011073",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4Au1i6VUAEK9eA.png",
          },
        ],
      },
    },
    {
      text: "RT @alcaldesoto: #EligeVivirSano proyecto @munirancagua y @MindepChile será nuestro último proyecto que entregaremos al uso de la comunidad…",
      author_id: "109297750",
      created_at: "2021-06-16T14:24:43.000Z",
      id: "1405169469723451397",
    },
    {
      text: "RT @Cormun_Rancagua: 👉Conoce esta información importante para asistir a tu CESFAM.\n.\n.\n.\n.\n.\n@alcaldesoto \n@munirancagua https://t.co/ixbld…",
      author_id: "109297750",
      created_at: "2021-06-16T14:24:02.000Z",
      id: "1405169298423881735",
    },
    {
      text: "RT @Cormun_Rancagua: 🔴Próximamente apertura del nuevo CESFAM 2, ubicado en avenida Las Torres. Otro compromiso cumplido para #Rancagua \n@al…",
      author_id: "109297750",
      created_at: "2021-06-16T14:23:54.000Z",
      id: "1405169267272785921",
    },
    {
      text: "¡Gran noticia! @alcaldesoto inaugurará la primera #FarmaciaMunicipal de #Rancagua Ubicada en Plaza Rodeo, frente a la Universidad de #OHiggins, que permitirá a los rancagüinos acceder a fármacos a bajo costo. ¿Qué te parece esta gran noticia? https://t.co/NgvTJvl4q9",
      author_id: "109297750",
      created_at: "2021-06-16T14:10:16.000Z",
      id: "1405165837120684035",
      attachments: {
        media_keys: [
          {
            media_key: "3_1405165749581205508",
            type: "photo",
            url: "https://pbs.twimg.com/media/E4AmzepVUAQgxVj.jpg",
          },
        ],
      },
    },
  ]

  useEffect(() => {
    //const subscription = props.source.subscribe()
    return () => {
      // Limpiar la suscripción
      // subscription.unsubscribe()
    }
  })
  return (
    <IonPage>
      <Header title="Inicio"></Header>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h3 className="title mt-2 text-center">Noticias</h3>
        {tweets.map((tweet, index) => (
          <NewsCard tweet={tweet} key={index}></NewsCard>
        ))}
      </IonContent>
    </IonPage>
  )
}

export default HomePage
