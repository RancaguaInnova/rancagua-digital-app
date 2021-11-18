import { useEffect } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import { Card, Carousel, Col, Row } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'
import Header from 'components/Header'
import { Tweet } from 'core/interfaces/tweet'
import NewsCard from 'components/NewsCard'
import { GetListTweets } from 'providers/redux/actions/tweet'
import Banner from 'components/BannerHeader'

const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const { tweets } = useSelector((state: any) => state.tweet)
  const listado: Tweet[] = tweets || []

  useEffect(() => {
    const timer = setTimeout(() => dispatch(GetListTweets()), 60000)
    return () => clearTimeout(timer)
  })

  useEffect(
    () => {
      dispatch(GetListTweets())

      return () => { }
    },
    [dispatch]
  )
  return (
    <IonPage>
      <Header title="Rancagua Digital" />
      <IonContent fullscreen>
        <Row justify="center">
          <Col xs={24} sm={22} md={12} lg={8}>
            <Banner></Banner>
          </Col>
        </Row>
        <Row justify="center">
          {listado.map((tweet: any, index: number) =>
            <Col xs={24} sm={22} md={12} lg={8} key={index}>
              <NewsCard data-aos="fade-up" tweet={tweet} />
            </Col>
          )}
        </Row>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
