import { useEffect } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import { Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'
import Header from 'components/Header'
import { Tweet } from 'core/interfaces/tweet'
import NewsCard from 'components/NewsCard'
import { GetListTweets } from 'providers/redux/actions/tweet'
import Banner from 'components/BannerHeader'
import { withSession } from 'hoc/withSession'
import { Session } from 'core/types/session'
import { Loading } from 'components/Loading'


interface HomeProps {
  session: Session;
  sessionLoading: Boolean;


}

const HomePage: React.FC<HomeProps> = ({ session, sessionLoading }) => {
  const dispatch = useDispatch()
  const { tweets } = useSelector((state: any) => state.tweet)
  const listado: Tweet[] = tweets || []

  useEffect(() => {
    const timer = setTimeout(() => dispatch(GetListTweets()), 10000)
    return () => clearTimeout(timer)
  })

  useEffect(() => {
    dispatch(GetListTweets())

    return () => { }
  }, [dispatch])
  return (


    <IonPage>
      <Header />

      {sessionLoading ? <IonContent fullscreen>
        <Loading></Loading></IonContent> :
        <IonContent fullscreen>
          <Row justify='center'>
            <Col xs={24} sm={22} md={12} lg={8}>
              <Banner ></Banner>
            </Col>
          </Row>
          <h3 className='subtitle'>Últimas Noticias</h3>
          <Row justify='center'>
            {listado.map((tweet: any, index: number) => (
              <Col xs={24} sm={22} md={12} lg={8} key={index}>
                <NewsCard data-aos='fade-up' tweet={tweet} />
              </Col>
            ))}
          </Row>
        </IonContent>
      }
    </IonPage>
  )
}

export default withSession(HomePage);
